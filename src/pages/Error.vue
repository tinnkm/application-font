<template>
  <div class="error-wrapper">
    <p>您提交的申请正在审核，请勿重复提交，您可以点击以下链接查询结果<router-link :to="{ name: 'Result', params: {bizId} }">{{bizId}}</router-link></p>
  </div>
</template>
<script>
export default {
  name: 'Error',
  props: ['bizId']
}
</script>
<style scoped>
.error-wrapper{
  display: block;
  min-height: 100%;
  padding: 60% 5%;
}
</style>
