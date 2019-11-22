<template>
  <div class="content">
    <div class="project">
      <h1 class="project__name">{{ project.name }}</h1>
      <div class="project__icon" v-bind:style="colorProjectIcon"></div>
    </div>
    <tasks v-for="(date, index) in sortDate" :key="index" :date="date" :taskList="taskList"/>
  </div>
</template>

<script>
    import Tasks from '~/components/article/Tasks'

    export default {
        components: {
            Tasks
        },
        data: function () {
            return {
                link: this.$route.params.link
            }
        },
        computed: {
            projects() {
                return this.$store.state.projects
            },
            project() {
                return this.projects.find(project => project.link === this.link)
            },
            tasks() {
                return this.$store.state.tasks
            },
            taskList() {
                return this.tasks.filter(task => task.selected.name === this.project.name)
            },
            datesCreated() {
                let datesCreated = []
                this.taskList.forEach(task => {
                    if (datesCreated.length === 0) {
                        datesCreated.push(task.dateCreated)
                    } else {
                        let hadDateCreated = false
                        datesCreated.forEach(date => {
                            if (task.dateCreated === date) {
                                hadDateCreated = true
                            }
                        })
                        if (!hadDateCreated) {
                            datesCreated.push(task.dateCreated)
                        }
                    }
                })
                return datesCreated
            },
            sortDate() {
                let datesCreated = this.datesCreated
                return datesCreated.sort((a,b) => {
                    return new Date(b) - new Date(a)
                })
            },
            colorProjectIcon() {
                return {
                    'background-color': this.project.color
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .project {
    display: flex;
    align-items: center;
    padding: 10px 0;
    &__icon,
    &__name {
      display: inline-block;
    }
    &__icon {
      width: 12px;
      height: 12px;
      border: 1px solid #DCDCDC;
      border-radius: 100%;
      margin: 0 5px;
    }
    &__name {
      color: #A9A9A9;
    }
  }
</style>
