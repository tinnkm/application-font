<template>
  <Card class='card'>
      <h3>流动人口及外来务工人员随迁子女就读申请</h3>
      <template v-for='(item,index) in list'>
        <Row class='card-item-row' :key='index'>
          <Col>
            <Card class='card-item'>
              <p slot='title'>{{item.title}}</p>
              <Row>
                <Col span="12" class="card-item-lable">材料模板：</Col>
                <Col span="12">{{item.template}}</Col>
              </Row>
              <Row>
                <Col span="12" class="card-item-lable">材料说明：</Col>
                <Col span="12">{{item.desc}}</Col>
              </Row>
              <Row class="upload">
                <Col>
                  <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="primary" icon="ios-cloud-upload-outline">Upload files</Button>
                  </Upload>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </template>
  </Card>
</template>
<script scoped>
import Api from '../assets/script/weiXinApi.js'
export default {
  name : 'Index',
  data () {
    return {
      list : [
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
  mounted () {
    Api.getAccessToken('wxa3481e4144f5be65','60767f78d3f897a7191446ee4bedb952')
  }
}

</script>
<style>
  .card {
    margin: 0 auto;
    width: 90%
  }
  .card-item-row {
    margin: 10% 0 10% 0;
  }
  .card-item-lable {
    text-align: left;
  }
  .upload{
    margin-top: 5%
  }
</style>
