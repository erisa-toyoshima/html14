<style lang="scss">
</style>

<template>
  <div>タイトルページ{{ num }}</div>
</template>

<script>

export default {
  name: 'Title',
  components: {
  },
  setup (props, context) {
    return {
      num: 30
    }
  }
}
</script>
