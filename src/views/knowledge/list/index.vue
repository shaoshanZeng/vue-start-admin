<template>
  <div>
    <div>list</div>
    <div>本周日期:{{ startday }}至{{ endday }}</div>
    <el-button type="primary" @click="add">添加知识</el-button>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "hello world",
    startday: "",
    endday: "",
  }),
  mounted() {
    let result = this.utils.getNewWeekDate();
    this.startday = result.split("/")[0];
    this.endday = result.split("/")[1];
  },
  methods: {
    add() {
       this.$router.push({path:"/knowledge/addOrUpdate"});
    },
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>