<style lang="scss">
.root {
  >.title {
    font-size: 40px;
    color: pink;
  }
}
</style>

<template>
  <div class="root">
    <div class="title">
      メインページ
    </div>
    <ButtonA></ButtonA>
  </div>
</template>

<script>

import ButtonA from '../components/ButtonA.vue'

export default {
  name: 'Title',
  components: {
    ButtonA
  },
  setup (props, context) {
    return {
    }
  }
}
</script>