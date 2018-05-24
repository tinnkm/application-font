<template>
  <i-card class='i-card'>
      <h3>流动人口及外来务工人员随迁子女就读申请</h3>
      <template v-for='(item,index) in list'>
        <i-row class='i-card-item-i-row' :key='index'>
          <i-col>
            <i-card class='i-card-item'>
              <p slot='title'>{{item.title}}</p>
              <i-row>
                <i-col span="12" class="i-card-item-lable">材料模板：</i-col>
                <i-col span="12">{{item.template}}</i-col>
              </i-row>
              <i-row>
                <i-col span="12" class="i-card-item-lable">材料说明：</i-col>
                <i-col span="12">{{item.desc}}</i-col>
              </i-row>
              <i-row class="i-upload">
                <i-col>
                  <i-upload multiple action="//jsonplaceholder.typicode.com/posts/">
                    <i-button type="primary" icon="ios-cloud-i-upload-outline">上传</i-button>
                  </i-upload>
                </i-col>
              </i-row>
            </i-card>
          </i-col>
        </i-row>
      </template>
  </i-card>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
      list: [
        {
          title: '入学申请书',
          template: 'this is a iamge',
          desc: ''
        },
        {
          title: '外来务工人员和流动人口随迁子女就学联系函',
          template: 'this is a iamge',
          desc: ''
        },
        {
          title: '户口本',
          template: 'this is a iamge',
          desc: ''
        },
        {
          title: '居住证明',
          template: 'this is a iamge',
          desc: ''
        },
        {
          title: '劳务证明',
          template: 'this is a iamge',
          desc: ''
        },
        {
          title: '疫苗接种证',
          template: 'this is a iamge',
          desc: ''
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'init', // map `this.init()` to `this.$store.dispatch('init')`
      'update'// map `this.update()` to `this.$store.dispatch('update')`
    ])
  },
  created () {
    this.init()
  },
  mounted () {
    // Api.getAccessToken('wxa3481e4144f5be65','60767f78d3f897a7191446ee4bedb952')
  }
}

</script>
<style scoped>
  .i-card {
    margin: 0 auto;
    width: 90%
  }
  .i-card-item-i-row {
    margin: 10% 0 10% 0;
  }
  .i-card-item-lable {
    text-align: left;
  }
  .i-upload{
    margin-top: 5%
  }
</style>
