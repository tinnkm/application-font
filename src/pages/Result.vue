<template>
  <div class="result-wrapper">
    <i-card>
      <p solt='title'>审核结果</p>
      <p v-if="approvalStore.status === 2">恭喜您，你通过了审核，请凭{{approvalStore.accessCode}}认证码办理入学！</p>
      <p v-else-if="approvalStore.status === 3">很遗憾，您的信息因为{{approvalStore.comment}}而未通过审核！</p>
      <p v-else>您的信息正在审核中，请耐心等待</p>
    </i-card>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  name: 'Result',
  props: ['bizId'],
  computed: {
    ...mapState({
      approvalStore: state => state.approval.approvalStore
    })
  }
}
</script>
