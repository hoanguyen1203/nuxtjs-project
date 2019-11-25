<template>
  <div class="content">
    <tasks v-for="(date, index) in sortDate" :key="index" :date="date" :taskList="tasks"/>
  </div>
</template>

<script>
    import Tasks from '~/components/article/Tasks'
    import _ from 'lodash'

    export default {
        components: {
            Tasks
        },
        created() {
            if (process.client) {
                const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
                this.$store.dispatch('saveTasks', tasks)
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            },
            datesCreated() {
                let datesCreated = []
                // _.forEach(this.tasks, task => {
                //     if (datesCreated.length === 0) {
                //         datesCreated.push(task.dateCreated)
                //     } else {
                //         let hadDateCreated = false
                //         datesCreated.forEach(date => {
                //             if (task.dateCreated === date) {
                //                 hadDateCreated = true
                //             }
                //         })
                //         if (!hadDateCreated) {
                //             datesCreated.push(task.dateCreated)
                //         }
                //     }
                // })
                _.forEach(this.tasks, task => {
                    datesCreated = _.union([task.dateCreated], datesCreated)
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
