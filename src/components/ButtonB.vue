<style lang="scss">
.root {
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  background-color: gray;
  color: white;
  border-radius: 16px;
}
</style>

<template>
  <div class="root">{{ text }}</div>
</template>

<script>
export default {
  props: ['text'],
  setup (props, context) {
    return {
    }
  }
}
</script>

