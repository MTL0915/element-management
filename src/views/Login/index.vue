<template>
  <div class="login-container">
    <h3 class="login-title">后台管理系统登录</h3>
    <el-form :model="loginMess" ref="loginMess" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="帐号"
        prop="account"
        :rules="[
          { required: true, message: '帐号不能为空'}
        ]"
      >
        <el-input v-model="loginMess.account" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item 
        label="密码" 
        prop="password"
        :rules="[
          { required: true, message: '密码不能为空'}
        ]"
      >
        <el-input type="password" v-model="loginMess.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="resetForm('loginMess')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import Mock from 'mockjs'
  export default {
    data() {
      return {
        loginMess: {
          account: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        const token = Mock.mock('@guid')
        this.$store.commit('setToken', token)
        this.$router.push({name:'home'})
      },
      resetForm(loginMess) {
        this.$refs[loginMess].resetFields();
      }
    }
  }
</script>

<style scoped>
.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin:180px auto;
  width:350px;
  padding:35px 35px 15px 35px;
  background-color: #fff;
  border:1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login-title{
  margin:0 auto 40px auto;
  text-align: center;
  color:#505458
}
</style>