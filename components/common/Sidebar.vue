<template>
  <aside class="sidebar">
    <account account-name="Justin Pot" />
    <tags />
    <projects />
  </aside>
</template>

<script>
    import Account from '~/components/sidebar/Account'
    import Tags from '~/components/sidebar/Tags'
    import Projects from '~/components/sidebar/Projects'

    export default {
        name: 'Sidebar',
        components: {
            Projects,
            Tags,
            Account
        }
    }
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 30%;
    min-height: 100vh;
    border-right: 1px solid #DCDCDC;
    & > div {
      padding: 15px 20px;
    }
  }
</style>
