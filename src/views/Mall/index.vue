<template>
  <el-row>
    <el-col :span="4" v-for="item in bookArr" :key="item.id" style="padding:10px">
      <el-card :body-style="{ padding: '10px' }">
        <img :src="item.bookImg" class="image">
        <div style="padding: 14px;">
          <span class="bookName">{{ item.bookName }}</span>
          <div class="bottom clearfix">
            <div class="author">{{ item.bookAuthor }}</div>
            <el-button type="text" class="button" @click="deleteBook(item.id)">删除</el-button>
            <el-button type="text" class="button">编辑</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      bookArr:[
        { 
          id:'00001',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/683/34336683/t6_34336683.jpg",
          bookName:"JavaScript高级程序设计",
          bookAuthor:"马特·弗里斯比"
        },
        {
          id:'00002',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/945/22806945/t6_22806945.jpg",
          bookName:"你不知道的JavaScript",
          bookAuthor:"凯尔辛普森"
        },
        {
          id:'00003',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/761/37683761/t6_37683761.jpg",
          bookName:"深入浅出Vue.js",
          bookAuthor:"刘博文"
        },
        {
          id:'00004',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/437/26943437/t6_26943437.jpg",
          bookName:"Vue.js实战",
          bookAuthor:"梁灏"
        },
        {
          id:'00005',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/935/26211935/t6_26211935.jpg",
          bookName:"深入浅出Node.js",
          bookAuthor:"朴灵"
        },
        {
          id:'00006',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/461/27337461/t6_27337461.jpg",
          bookName:"HTML5权威指南",
          bookAuthor:"Adam Freeman"
        },
        {
          id:'00007',
          bookImg:"https://wfqqreader-1252317822.image.myqcloud.com/cover/821/31594821/t6_31594821.jpg",
          bookName:"深入解析CSS",
          bookAuthor:"基思·J.格兰特"
        },
      ]
    };
  },
  methods: {
    deleteBook(id) {
      this.$confirm('此操作将删除该推荐书籍, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        for(let i=0;i<this.bookArr.length;i++){
          if(this.bookArr[i].id == id){
            this.bookArr.splice(i,1)
          }
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }
}
</script>

<style>
  .bookName {
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  .author {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 5px;
    line-height: 12px;
  }

  .button {
    margin-left:5px;
    margin-top: 5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>