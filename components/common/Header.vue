<template>
  <header class="header">
    <div class="header__left">
      <button class="header__button"><i class="fa fa-bars" aria-hidden="true"></i></button>
      <button class="header__button"><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>
    <div class="header__right">
      <h1 class="header__title">{{ getHeaderTitle }}</h1>
      <button class="header__add-task" @click="openModal">
        <i class="material-icons">add</i>
      </button>
    </div>
  </header>
</template>

<script>
    import { EventBus } from '~/store/event-bus.js'

    export default {
        name: 'Header',
        data: function() {
            return {
                isShow: false
            }
        },
        created() {
            EventBus.$on('closeModalAddTask', isShow => {
                this.isShow = isShow
            })
        },
        computed: {
            getCurrentPath() {
                return this.$nuxt.$route.path
            },
            convertStringToArray() {
                return this.getCurrentPath.split('/')
            },
            getHeaderTitle() {
                if(this.convertStringToArray[1] === '') {
                    return 'Home'
                }
                return this.convertStringToArray[1]
            }
        },
        methods: {
            openModal() {
                this.isShow = !this.isShow
                EventBus.$emit('openModalAddTask', this.isShow)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #F08080;
    &__left {
      width: 30%;
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    &__right {
      width: 70%;
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }
    &__button {
      background-color: transparent;
      border: none;
    }
    &__title {
      text-transform: capitalize;
    }
  }
</style>
