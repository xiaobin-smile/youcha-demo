<template>
  <div class="header">
    <span class="comName">
      <i class="el-icon-loading"></i>祁东油茶产业标准管理系统
    </span>
    <div class="user">
      <div class="userSet">
        <i class="el-icon-user"></i>
        <span>{{ username }}</span>
        <i class="el-icon-arrow-down"></i>
      </div>
      <i class="el-icon-switch-button"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:""
    }
  },
  mounted(){
    this.username = this.$local.getVal("user").username
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 70px;
  background: #ccc;
  line-height: 70px;
  color: #999;
  background: #fff;
  box-shadow: 0px 3px 2px rgba(204, 204, 204, 0.2);
  display: flex;
  justify-content: space-between;
  .comName {
    font-weight: 700;
    font-size: 18px;
    .el-icon-loading {
      font-size: 50px;
      vertical-align: middle;
    }
  }
  .user {
    width: 300px;
    display: flex;
    justify-content: space-between;
    .userSet {
      padding: 0 10px;
    }
    .el-icon-user {
      font-size: 24px;
    }
    .el-icon-switch-button {
      width: 70px;
      height: 100%;
      line-height: 70px;
      text-align: center;
      font-size: 24px;
    }
  }
  .userSet:hover,
  .el-icon-switch-button:hover {
    background: #f0f0f0;
  }
}
</style>