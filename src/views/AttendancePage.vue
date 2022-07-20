<style lang="scss">

</style>

<template>
    <div>勤怠管理ページdayo</div>
    <div>{{ members[0] }}</div>
    <div v-for="(member, index) in members" :key="index">
        {{ index }}:{{ member.name }}{{ member.comment }}
    </div>
</template>

<script>

export default {
  components: {
  },
  setup (props, context) {
    return {
        members:[
          {
            name:'erisa',
            comment:'おはよう',
          },
          {
            name:'arisa',
            comment:'お休み',
          }
        ]

    }
  }
}
</script>
