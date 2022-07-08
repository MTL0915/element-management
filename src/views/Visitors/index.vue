<template>
  <el-row>
    <!-- 左侧搜索查询 -->
    <el-col :span="6">
      <div class="search">
        <div class="search-header">
          <el-input v-model="input" placeholder="请输入手机号或姓名搜索"></el-input>
          <el-button type="primary" size="small" style="margin-left:10px">搜索</el-button>
          <el-button type="success" size="small" style="margin-right:10px">建单</el-button>
        </div>
        <div class="search-body">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="顾客姓名"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="phone"
                  label="手机号码"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="状态">
                </el-table-column>
                <el-table-column
                  prop="handle"
                  label="操作">
                </el-table-column>
              </el-table>
        </div>
      </div>
    </el-col>
    <!-- 右侧顾客详情 -->
    <el-col :span="18">
      <div class="detail">
        <!-- 顾客详情头部 -->
        <div class="detail-header">
          <el-row>
            <el-col :span="7" class="detail-header-left">
              <div class="detail-header-left-left">
                <img class="userImg" src="../../assets/images/touxiang.jpg">
                <span>女</span>
                <span>修改</span>
              </div>
              <div class="detail-header-left-right">
                <p>梁女士</p>
                <p>12345678910</p>
                <p>斑夫人建滔店</p>
                <p class="justify">顾问</p>
                <p class="justify">美容师</p>
                <p class="justify">上次到店时间</p>
              </div>
            </el-col>
            <el-col :span="9" class="detail-header-middle">账户信息</el-col>
            <el-col :span="8" class="detail-header-right">预约信息</el-col>
          </el-row>
        </div>
        <!-- 顾客详情操作栏 -->
        <div class="detail-do">
          <a>
            <i class="el-icon-goods"></i><span>购买</span>
          </a>
          <a>
            <i class="el-icon-goods"></i><span>充值</span>
          </a>
          <a>
            <i class="el-icon-goods"></i><span>消费</span>
          </a>
          <a>
            <i class="el-icon-goods"></i><span>取货</span>
          </a>
          <a>
            <i class="el-icon-goods"></i><span>还款</span>
          </a>
        </div>
        <!-- 顾客详情信息栏 -->
        <div class="detail-main">
          <router-view></router-view>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // 搜索栏输入框内容
      input: '',
      // 搜索栏表单数据
      tableData: [{
        name: '梁女士',
        phone: '12345678910',
        state: '服务中',
        handle: 'false'
      }]
    }
  }
}
</script>

<style>

/* 搜索栏 */
.search-header{
  display: flex;
  margin-bottom: 10px;
}

/* 顾客详情头部 */
.detail-header{
  background-color: #f6fbf9;
  padding:20px;
  border-bottom: 2px solid #eee;
}
.detail-header-left{
  display: flex;
  border-right:1px solid #eee;
  height:150px;
}
.detail-header-middle{
  border-right:1px solid #eee;
  height:150px;
}
.detail-header-right{
  height:150px;
}
.detail-header-left-left{
  width:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}
.detail-header-left-left span{
  margin-top:20px;
}
.userImg{
  width:50px;
  height:50px;
  border-radius: 50%;
}
.detail-header-left-right{
    flex-grow: 1;
}
.detail-header-left-right p{
  line-height:24px;
  text-align: left;
}
.justify{
  width:100px;
  text-align: justify;
  text-align-last: justify;
}

/* 顾客详情操作栏 */
.detail-do{
  height:60px;
  line-height: 60px;
  text-align: left;
  background-color: #fff;
}
.detail-do > a{
  margin-left:20px;
  color: #46a0fc;
}
</style>