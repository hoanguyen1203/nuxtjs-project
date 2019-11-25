<template>
  <div class="tags">
    <tag v-for="(tag, index) in tags" :key="index" :tag="tag"/>
    <div v-show="false">
      <span>{{numberTagToday}} - {{numberTagHome}}</span>
    </div>
  </div>
</template>

<script>
    import Tag from '~/components/tag/Tag'
    import _ from 'lodash'

    export default {
        name: 'Tags',
        components: {
            Tag
        },
        data() {
            return {
                tags: [
                    {name: 'Today', icon: 'fa fa-calendar-o', link: '/today', number: 0},
                    {name: 'Home', icon: 'fa fa-calendar', link: '/', number: 0}
                ]
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            },
            sumTasks() {
                return this.tasks.length
            },
            tagHome() {
                const tagHome = _.find(this.tags, tag => tag.name === 'Home')
                return tagHome
            },
            numberTagHome() {
                this.tagHome.number = this.sumTasks
                return this.tagHome.number
            },
            sumTasksToday() {
                let date = new Date()
                let today = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
                let arrayTaskToday = _.filter(this.tasks, task => task.dateCreated === today)
                return arrayTaskToday.length
            },
            tagToday() {
                const tagToday = _.find(this.tags, tag => tag.name === 'Today')
                return tagToday
            },
            numberTagToday() {
                this.tagToday.number = this.sumTasksToday
                return this.tagToday.number
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
