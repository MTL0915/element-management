<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增文章' : '更新文章'"
      :visible.sync="isShow"    
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-body">
      <common-table :tableData="tableData" @edit="edit" @deleteRow="deleteRow"></common-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Mock from 'mockjs'
import commonForm from '../../components/commonForm.vue'
import commonTable from '../../components/commonTable.vue'
export default {
  name:'User',
  components:{
    commonForm,
    commonTable
  },
  data(){
    return{
      operateType:'add',
      isShow:false,
      operateFormLabel: [
        {
          model:'author',
          label:'姓名',
          type:'input'
        },
        {
          model:'title',
          label:'标题',
          type:'input'
        },
        {
          model:'show',
          label:'是否显示',
          type:'select',
          opts:[
            {
              label:'是',
              value:1
            },
            {
              label:'否',
              value:0
            }
          ]
        },{
          model:'birth',
          label:'创作日期',
          type:'date'
        },{
          model:'article',
          label:'文章内容',
          type:'input'
        },
      ],
      operateForm:{
        author: '',
        article: '',
        title: '',
        birth: '',
        show: ''
      },
      formLabel:[
        {
          model:'keyword',
          label:'作者姓名',
          type:'input'
        }
      ],
      searchForm:{
        keyword:''
      },
      tableData:[],
      copyTableData:[]
    }
  },
  methods:{
    confirm(){

    },
    addUser(){
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        author: '',
        article: '',
        title: '',
        birth: '',
        show: ''
      }
    },
    getList(keyword){
      let arr = []
      if(keyword == ''){
        // copyTableData是备份一个，因为tableData会改变
        this.tableData = this.copyTableData
      }else{
        for(var i=0;i<this.tableData.length;i++){
          if((this.tableData[i].author).indexOf(keyword) != -1 ){
            arr.push(this.tableData[i])
          }
        }
        this.tableData = arr
      }
    },
    edit(){
      this.isShow = true
      this.operateType = 'updata'
      this.operateForm = {
        author: '',
        article: '',
        title: '',
        birth: '',
        show: ''
      }
    },
    deleteRow(){
      this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  },
  mounted(){
    Mock.mock('https://cdn.liyanhui.com/data.json',{
      'list|10' : [
        {
          'id|+1': 1,
          'date' : '@date("yyyy-MM-dd")',
          'author' : '@cname',
          'title' : '《@cword(2, 10)》',
          'article' : '@cparagraph',
          'show' : '是'
        }
      ]
    })
    axios.request({
      method:'get',
      url:'https://cdn.liyanhui.com/data.json'
    }).then(res => {
      this.tableData = res.data.list
      this.copyTableData = res.data.list
    })
    .catch(err => {
      console.log('错误:' + err)
    })
  }
}
</script>

<style scoped>
.manage-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:60px;
}
</style>