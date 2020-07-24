<template>
  <div class="home">
    <v-header></v-header>
    <v-Navbar></v-Navbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";
import vNavbar from "@/components/Navbar.vue";
import vMainTitle from "@/components/main/MainTitle.vue";
export default {
  components: {
    vHeader,
    vNavbar,
    vMainTitle
  },
};
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .main{
    position: absolute;
    top: 70px;
    left: 251px;
    bottom: 0;
    right: 0;
    background: #f0f0f0;
    overflow-y: auto;
  }
}
</style>