<template>
  <div class="tasks">
    <div class="tasks__header">
      <div class="tasks__time" v-if="checkEquaToday">Today</div>
      <div class="tasks__time" v-else>{{ showDay }}</div>
      <div class="tasks__day">{{ showDate }}</div>
    </div>
    <task v-for="task in tasks" :key="task.id" :task="task" :date="date" />
  </div>
</template>

<script>
    import Task from '~/components/task/Task'
    import _ from 'lodash'

    export default {
        name: 'Tasks',
        components: {
            Task
        },
        data: function () {
            return {
                today: new Date(),
                days: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ]
            }
        },
        props: [
            'date',
            'taskList'
        ],
        computed: {
            tasks() {
                return this.taskList
            },
            checkEquaToday() {
                let currentDate = this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+this.today.getDate()
                if (this.date === currentDate) {
                    return true
                }
                return false
            },
            showDay() {
                return this.days[new Date(this.date).getDay()]
            },
            showDate() {
                return this.months[_.split(this.date, '/', 3)[1] - 1] + " " + _.split(this.date, '/', 3)[2]
            }
        }
    }
</script>

<style lang="scss" scoped>
  .tasks {
    padding: 20px 0;
    &__time,
    &__day {
      display: inline-block;
    }
    &__time {
      font-size: 24px;
    }
    &__day {
      font-size: 14px;
      color: #A9A9A9;
      padding-left: 10px;
    }
  }
</style>
