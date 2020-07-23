<template>
  <div class="home">
    <el-container>
      <el-header height="70px">
        <v-header></v-header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";
export default {
  components: {
    vHeader,
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
  }

  .el-aside {
    background-color: #d3dce6;
  }

  .el-main {
    background-color: #e9eef3;
    overflow: auto;
  }
  .el-container {
    height: 100%;
  }
}
</style>