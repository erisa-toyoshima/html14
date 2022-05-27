<style lang="scss">

.button {
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
//このボタンをいろんなところで使いたい！

</style>

<template>
  <div>タイトルページ{{ num }}</div>
  <div class="button">ボタン</div>
  <ButtonA></ButtonA>
  <ButtonB text="naわん"></ButtonB>
  <ButtonD text="nana" :type="2"></ButtonD>
  <ButtonD text="mama" :type="1"></ButtonD>
</template>

<script>

import ButtonA from '../components/ButtonA.vue'
import ButtonB from '../components/ButtonB.vue'
import ButtonD from '../components/ButtonD.vue'

export default {
  name: 'Title',
  components: {
    ButtonA,
    ButtonB,
    ButtonD
  },
  setup (props, context) {
    return {
      num: 30
    }
  }
}
</script>
