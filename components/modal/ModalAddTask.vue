<template>
  <div class="modal fade in" @close="closeModal" :class="{'isShow': isShow}">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="closeModal">&times;</button>
          <h4 class="modal-title">Add Task</h4>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input type="text" class="form-control" v-model="newTask" placeholder="New Task">
          </div>
          <div class="form-group">
            <select class="form-control" v-model="selected">
              <option v-for="(project, index) in projects" :key="index" v-bind:value="project">{{ project.name }}</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="addTask">Save</button>
          <button type="button" class="btn btn-default" @click="closeModal">Close</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import { EventBus } from '~/store/event-bus.js'

    export default {
        name: 'ModalAddTask',
        data() {
            return {
                isShow: false,
                newTask: '',
                selected: {},
                today: new Date()
            }
        },
        created() {
            EventBus.$on('openModalAddTask', isShow => {
                this.isShow = isShow
            })
        },
        computed: {
            projects() {
                return this.$store.state.projects
            },
            tasks() {
                return this.$store.state.tasks
            }
        },
        methods: {
            addTask() {
                if (this.newTask !== '') {
                    const dateCreated = this.today.getFullYear() + "/" + (this.today.getMonth() + 1) + "/" + this.today.getDate()
                    const number = this.selected.number + 1
                    const task = {
                        id: this.tasks.length,
                        name: this.newTask,
                        selected: {
                            name: this.selected.name,
                            color: this.selected.color,
                            number: number
                        },
                        dateCreated: dateCreated,
                        completed: false
                    }

                    this.$store.dispatch('addTask', task)

                    localStorage.setItem('tasks', JSON.stringify(this.tasks))

                    // Update Number Project under LocalStorage
                    this.updateNumberProject(number)
                }
            },
            updateNumberProject(number) {
                this.projects.forEach(project => {
                    if(project.name === this.selected.name){
                        project.number = number
                    }
                })
                localStorage.setItem('projects', JSON.stringify(this.projects))
            },
            closeModal() {
                this.isShow = !this.isShow
                EventBus.$emit('closeModalAddTask', this.isShow)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .modal {
    display: block;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    /*transition: opacity 0.3s ease-out, visibility 0.3s ease-out;*/
    background-color: rgba(0, 0, 0, 0.5);
    &-dialog {
      position: relative;
      max-width: 700px;
      width: calc(100% - 50px);
      height: 100vh;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-content {
      width: 100%;
    }
  }
  .modal.isShow {
    opacity: 1;
    visibility: visible;
    z-index: 2;
  }
  .modal.fade.in {
    .modal-dialog {
      opacity: 0;
      transform: translateY(-20%);
      visibility: hidden;
      transition: opacity 0.3s ease-out, transform 0.3s ease-out, visibility 0.3s ease-out;
    }
  }
  .modal.fade.in.isShow {
    .modal-dialog {
      opacity: 1;
      transform: translate(0);
      visibility: visible;
    }
  }
</style>
