<template>
  <div>
    <!-- {{message1}}
    {{counts}}
    {{count}} -->
    <el-button type="primary" @click="login">登录</el-button>
    <!-- <el-button type="primary" @click="add1">增加</el-button> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

 
export default {
  // data: () => ({

  // }),
  data: () => ({
    message: "hello world",
  }),
  methods: {
    add1(){
      this.$store.dispatch("add1",888);
    },
    async login() {

     // 加上await 就会等请求完成 再执行后面的跳转
     await this.$store.dispatch("auth/login",{
        username: "2001",
        password: "80c0bfe9baa01edaec755a26f8aea7b0",
      })  
     this.$router.push({path:"/knowledge/list"});
      

    },
  },
  computed:{
    message1(){
      return this.$store.getters.counts
    },
     ...mapGetters([
      'counts',
      'count',
    ])

  }
};
</script>
<style scoped lang="less">
.login-container {
  background: #ddd;
  color: #333;
}
</style>