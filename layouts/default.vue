<template>
  <div id="app">
    <Header />
    <sidebar />
    <nuxt />
    <modal-add-project />
    <modal-add-task />
  </div>
</template>

<script>
  import Header from '~/components/common/Header'
  import Sidebar from '~/components/common/Sidebar'
  import ModalAddProject from '~/components/modal/ModalAddProject'
  import ModalAddTask from '~/components/modal/ModalAddTask'

  export default {
      components: {
          ModalAddTask,
          ModalAddProject,
          Header,
          Sidebar
      }
  }
</script>

<style>
  * {
    color: #222222;
    font-size: 16px;
    box-sizing: border-box;
  }

  body,
  h1,
  h2 {
    margin: 0;
    padding: 0 !important;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  a {
    color: #222222;
    text-decoration: none;
    transition: all 0.3s ease-out;
  }

  a:focus,
  a:hover {
    color: #F08080;
    text-decoration: none;
    cursor: pointer;
  }

  .nuxt-link-exact-active {
    color: #F08080;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    transition: all 5s ease-out;
  }

  button:focus {
    outline: none;
  }

  #app {
    display: flex;
    flex-wrap: wrap;
  }

  .content {
    width: 70%;
    padding: 50px;
  }
</style>
