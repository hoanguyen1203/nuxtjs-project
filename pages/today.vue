<template>
  <div class="content">
    <tasks v-for="(date, index) in sortDate" :key="index" :date="date" :taskList="taskList"/>
  </div>
</template>

<script>
    import Tasks from '~/components/article/Tasks'

    export default {
        name: 'today',
        components: {
            Tasks
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            },
            taskList() {
                let date = new Date()
                let today = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
                return _.filter(this.tasks, task => task.dateCreated === today)
            },
            datesCreated() {
                let datesCreated = []
                _.forEach(this.taskList, task => {
                    if (datesCreated.length === 0) {
                        datesCreated.push(task.dateCreated)
                    } else {
                        let hadDateCreated = false
                        _.forEach(datesCreated, date => {
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
            }
        }
    }
</script>

<style scoped>

</style>
