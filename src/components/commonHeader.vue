<template>
<div>
  <div class="header">
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <h3 ref="hello" style="color:#fff">{{$route.meta}}</h3>
    </div>
    <div class="r-content">
      <el-dropdown class="userContent" trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="back">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      userImg:require('../assets/images/touxiang.jpg')
    }
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    },
    back(){
      console.log(11)
      this.$router.push({
        name:'login'
      })
    }
  },
  mounted(){

  }
}
</script>

<style>
.header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content{
  display: flex;
  align-items: center;
}
.l-content .el-button{
  margin-right: 20px
}
.r-content{
  display: flex;
  align-items: center;
}
.r-content .userContent{
  height: 40px;
}
.r-content .user{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>