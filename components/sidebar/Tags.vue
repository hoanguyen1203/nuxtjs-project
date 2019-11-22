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
                return this.tags.find(tag => tag.name === 'Home')
            },
            numberTagHome() {
                this.tagHome.number = this.sumTasks
                return this.tagHome.number
            },
            sumTasksToday() {
                let date = new Date()
                let today = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
                let arrayTaskToday = this.tasks.filter(task => task.dateCreated === today)
                return arrayTaskToday.length
            },
            tagToday() {
                return this.tags.find(tag => tag.name === 'Today')
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
