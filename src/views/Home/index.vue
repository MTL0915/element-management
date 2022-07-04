<template>
  <el-row class="home" :gutter="24">
    <el-col :span="8" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="user">
          <img class="userImg" :src="userImg">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="logininfo">
          <p>上次登录时间:<span>2022-05-26</span></p>
          <p>上次登录地点:<span>广州</span></p>
        </div>
      </el-card>
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="90">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="16" style="margin-top:20px">
      <el-card shadow="never" body-style="width: 100%;display: flex;justify-content: space-around;" class="progress">
        <div class="progress-item">
          <el-progress type="circle" :percentage="75" status="success"></el-progress>
          <p>日访问目标</p>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="70" status="success"></el-progress>
          <p>周访问目标</p>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" status="success"></el-progress>
          <p>月访问目标</p>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="80" status="success"></el-progress>
          <p>季访问目标</p>
        </div>
        <div class="progress-item">
          <el-progress type="circle" :percentage="60" status="warning"></el-progress>
          <p>年访问目标</p>
        </div>
      </el-card>
      <el-card style="height:280px;margin-top:20px">
        <div style="height:280px" ref="lineEcharts"></div>
      </el-card>
      <div class="graph" style="height:280px;margin-top:20px">
        <el-card style="height:280px">
          <div style="height:280px" ref="barEcharts"></div>
        </el-card>
        <el-card style="height:280px">
          <div style="height:280px" ref="pieEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data(){
    return{
      userImg:require('../../assets/images/touxiang.jpg'),
      tableData: [
        {
          date: '2022-06-08',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }, {
          date: '2022-06-07',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }, {
          date: '2022-06-06',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }, {
          date: '2022-06-05',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        },        {
          date: '2022-06-04',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }, {
          date: '2022-06-03',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }, {
          date: '2022-06-02',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }, {
          date: '2022-06-01',
          name: '乐',
          address: '广州市海珠区琶洲街道 1518 号'
        }
      ]
    }
  },
  mounted(){
    const lineOption = {
        title: {
          text: '本周同时在线人数'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '最高在线人数',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '最低在线人数',
            type: 'line',
            data: [1, 2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: '周最低', value: 0, xAxis: 6, yAxis: 0 }]
            },
            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max'
                    },
                    type: 'max',
                    name: '最高点'
                  }
                ]
              ]
            }
          }
        ]
    };

    const barOption = {
      title: {
        text: '本周访问博客篇数'
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    };

    const pieOption = {
      title: {
        text: '本周访问博客top3'
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: 'css的flex布局'
            },
            {
              value: 234,
              name: 'html5新特性'
            },
            {
              value: 1548,
              name: 'vue2知识点'
            },
            {
              value: 200,
              name: '其他'
            }
          ]
        }
      ]
    };

    const lineE = echarts.init(this.$refs.lineEcharts)
    const barE = echarts.init(this.$refs.barEcharts)
    const pieE = echarts.init(this.$refs.pieEcharts)
    lineE.setOption(lineOption)
    barE.setOption(barOption)
    pieE.setOption(pieOption)
  }
}
</script>

<style scoped>
.user{
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.userImg{
  width:150px;
  height:150px;
  border-radius: 50%;
  margin-right:40px;
}
.userinfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.userinfo .name{
  font-size: 30px;
  margin-bottom: 10px;
}
.logininfo{
  text-align: left;
}
.logininfo p{
  margin-bottom: 10px;
}
.logininfo p span{
  margin-left: 20px;
}
.table{
  margin-top:20px;
}
.progress{
  display: flex;
  justify-content:space-around;
}
.progress-item{
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}
.progress-item p{
  margin-top:10px;
}
.graph{
  display: flex;
  justify-content: space-between;
}
.graph .el-card{
  width:49%;
}

</style>