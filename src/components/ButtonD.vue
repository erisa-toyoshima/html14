<style lang="scss">
.root {
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  &.type1 {
    background-color: orange;
  }
  &.type2 {
    background-color: purple;
    border-width: 4px;
    border-color: white;
    border-style: dashed;
  }
  color: white;
  border-radius: 16px;
}
</style>
<template>
  <div v-if="type==1" class="root type1">{{ text }}</div>
  <div v-if="type==2" class="root type2">{{ text }}</div>
</template>

<script>
export default {
  props: ['text', 'type'],
  setup (props, context) {
    return {
    }
  }
}
</script>

