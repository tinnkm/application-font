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
              <i-row>
                <i-col>
                  <div class="upload-list" v-for="(item, _index) in uploadList[index]" :key="index+'_'+_index">
                   <template v-if="item.status === 'finished'">
                     {{item.response.data.bizId}}
                     <img :src="item.url">
                     <div class="upload-list-cover">
                         <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                         <Icon type="ios-trash-outline" @click.native="handleRemove(index, item)"></Icon>
                     </div>
                   </template>
                  </div>
                </i-col>
              </i-row>
              <i-row class="i-upload">
                <i-col>
                  <i-upload
                    ref="upload"
                    :show-upload-list="false"
                    multiple
                    :data="approvalStore"
                    :on-success="handleSuccess"
                    :on-format-error="handleFormatError"
                    :action="'/api/file/upload/' + item.type"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048">
                    <i-button type="primary" icon="ios-cloud-upload-outline" @click.native="handleClick(index)">上传</i-button>
                  </i-upload>
                </i-col>
              </i-row>
            </i-card>
          </i-col>
        </i-row>
      </template>
      <i-modal title="View Image" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
      </i-modal>
  </i-card>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Vue from 'vue'
// import _ from 'lodash'
export default {
  name: 'Index',
  data () {
    return {
      list: [
        {
          title: '入学申请书',
          template: 'this is a iamge',
          desc: '',
          type: 'approvalForSchool',
          index: 0
        },
        {
          title: '外来务工人员和流动人口随迁子女就学联系函',
          template: 'this is a iamge',
          desc: '',
          type: 'contact',
          index: 1
        },
        {
          title: '户口本',
          template: 'this is a iamge',
          desc: '',
          type: 'domicile',
          index: 2
        },
        {
          title: '居住证明',
          template: 'this is a iamge',
          desc: '',
          type: 'residencePermit',
          index: 3
        },
        {
          title: '劳务证明',
          template: 'this is a iamge',
          desc: '',
          type: 'labour',
          index: 4
        },
        {
          title: '疫苗接种证',
          template: 'this is a iamge',
          desc: '',
          type: 'vaccinationCertificate',
          index: 5
        }
      ],
      uploadList: [],
      imgName: '',
      visible: false,
      currentIndex: 0,
      currentList: []
    }
  },
  computed: {
    ...mapState({
      approvalStore: state => state.approval.approvalStore
    })
    // uploadListComputed () {
    //   return
    // }

  },
  methods: {
    ...mapActions([
      'init', // map `this.init()` to `this.$store.dispatch('init')`
      'update'// map `this.update()` to `this.$store.dispatch('update')`
    ]),
    handleClick (index) {
      this.currentIndex = index
    },
    handleSuccess (res, file) {
      let list = this.uploadList[this.currentIndex]
      if (list) {
        list.push(file)
        // 注意：数组采用以下方式赋值视图不会重新渲染，同理对象的也不行
        // this.uploadList[this.currentIndex] = list
        Vue.set(this.uploadList, this.currentIndex, list)
      } else {
        Vue.set(this.uploadList, this.currentIndex, new Array(file))
      }
      console.log(this.uploadList)
    },
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件类型错误',
        desc: '文件： ' + file.name + ' 上传失败！请上传图片格式的文件'
      })
    },
    handleRemove (index, item) {
      // uploadList中删除。文件删除，数据库删除
      // 文件删除
      let list = this.uploadList[index]
      list.splice(list.indexOf(item), 1)
      Vue.set(this.uploadList, index, list)
      // 后台删除
    }
  },
  created () {
    this.init()
  },
  mounted () {

  }
}

</script>
<style scoped>
  .i-card {
    margin: 0 auto;
    width: 90%;
  }
  .i-card-item-i-row {
    margin: 10% 0 10% 0;
  }
  .i-card-item-lable {
    text-align: left;
  }
  .i-upload{
    margin-top: 5%;
  }
  .upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .upload-list img{
    width: 100%;
    height: 100%;
  }
  .upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .upload-list:hover .upload-list-cover{
    display: block;
  }
  .upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
