<template>
  <div>
    <!-- 一级导航开始 -->
    <el-tabs type="border-card" class="card-box" v-model="activeName">
      <el-tab-pane label="本次购买">本次购买</el-tab-pane>
      <el-tab-pane label="本次充值">本次充值</el-tab-pane>
      <el-tab-pane label="本次消费">本次消费</el-tab-pane>
      <el-tab-pane label="本次取货">本次取货</el-tab-pane>
      <el-tab-pane label="本次还款">本次还款</el-tab-pane>
      <el-tab-pane label="顾客信息"  name="messageActive">
        <!-- 二级导航开始 -->
        <el-tabs :tab-position="tabPositionLeft" style="height: 400px;">
          <el-tab-pane label="顾客详情">
            <span class="message-span">生日：</span>
            <span class="message-span">学历：</span>
            <span class="message-span">职业：</span>
            <span class="message-span">工作单位：</span>
            <span class="message-span">婚姻状况：</span>
            <span class="message-span">生育情况：</span>
            <span class="message-span">联系地址：</span>
            <!-- 三级导航开始 -->
            <el-tabs :tab-position="tabPositionTop" style="height: 200px;">
              <el-tab-pane label="充值记录">
                  <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="hyk"
                      label="会员卡"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="czje"
                      label="充值金额（元）"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="zsje"
                      label="赠送金额（元）">
                    </el-table-column>
                    <el-table-column
                      prop="czsj"
                      label="充值时间">
                    </el-table-column>
                    <el-table-column
                      prop="zfpz"
                      label="支付凭证">
                    </el-table-column>
                    <el-table-column
                      prop="xsbm"
                      label="销售部门">
                    </el-table-column>
                    <el-table-column
                      prop="xsgw"
                      label="销售顾问">
                    </el-table-column>
                    <el-table-column
                      prop="xsmrs"
                      label="销售美容师">
                    </el-table-column>
                  </el-table>
              </el-tab-pane>
              <el-tab-pane label="会员升级记录">会员升级记录</el-tab-pane>
              <el-tab-pane label="退款记录">退款记录</el-tab-pane>
              <el-tab-pane label="还款记录">还款记录</el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <!-- 三级导航结束 -->
          <el-tab-pane label="已购项目">已购项目</el-tab-pane>
          <el-tab-pane label="已购物品">已购物品</el-tab-pane>
          <el-tab-pane label="已购疗程">已购疗程</el-tab-pane>
          <el-tab-pane label="促销方案">促销方案</el-tab-pane>
          <el-tab-pane label="沟通记录">沟通记录</el-tab-pane>
          <el-tab-pane label="到店记录">到店记录</el-tab-pane>
          <el-tab-pane label="退货记录">退货记录</el-tab-pane>
        </el-tabs>
        <!-- 二级导航结束 -->
      </el-tab-pane>
    </el-tabs>
    <!-- 一级导航结束 -->
  </div>

  
</template>

<script>
export default {
  mounted(){
    console.log(this.$route)
  },
  data() {
    return {
      // 默认先显示顾客信息
      activeName: 'messageActive',
      tabPositionLeft: 'left',
      tabPositionTop: 'top',
      tableData: [
        {
          hyk: '普通卡',
          czje: '6000',
          zsje: '0',
          czsj: '2021-01-19 13:34:45',
          zfpz: '',
          xsbm: '斑夫人建滔店',
          xsgw: '黄海燕（100%）',
          xsmrs: '廖敏仪（100%）',
        }
    ]
    };
  }
}
</script>

<style>
.card-box{
  text-align: left;
}
.message-span{
  display: inline-block;
  width:25%;
  height:40px;
  line-height: 40px;
}
</style>