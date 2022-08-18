<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" active-text-color="#ffd04b" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h3 class="titleName">{{managementName}}</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path + ''">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path + ''">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item :index="subItem.path + ''">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        managementName:"通用后台管理系统",
        menu:[
          {
            path:'/home',
            name:'home',
            label:'首页',
            icon:'s-home',
            url:'Home/Home'
          },
          {
            path:'/article',
            name:'article',
            label:'文章管理',
            icon:'tickets',
            url:'UserManage/UserManage'
          },
          {
            path:'/mall',
            name:'mall',
            label:'好书推荐',
            icon:'reading',
            url:'MallManage/MallManage'
          }
          // {
          //   label:'其他',
          //   icon:'location',
          //   children: [
          //     {
          //       path:'/page1',
          //       name:'page1',
          //       label:'备用1',
          //       icon:'setting',
          //       url:'Other/PageOne'
          //     },
          //     {
          //       path:'/page2',
          //       name:'page2',
          //       label:'备用2',
          //       icon:'setting',
          //       url:'Other/PageTwo'
          //     }
          //   ]
          // }
        ]
      };
    },
    computed:{
      noChildren(){
        return this.menu.filter(item => !item.children)
      },
      hasChildren(){
        return this.menu.filter(item => item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name: item.name
        })
      }
    },
    watch:{
      isCollapse(){
        if(this.isCollapse){
          this.managementName = '后台'
        }else{
          this.managementName = '通用后台管理系统'
        }
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* min-height: 400px; */
  }
  .titleName{
    height:60px;
    line-height: 60px;
  }
  .el-menu{
    border:none;
  }
</style>