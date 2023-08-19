<template>
  <header>
    <div class="logo">
      <img src="/resources/imgs/logo-b-nobg.png" alt="logo">
    </div>
    <nav></nav>
    <div class="login" v-if="isLogin">
      <router-link to="/dashboard/home">个人中心</router-link>
    </div>
    <div class="login" v-else>
      <router-link to="/login">登录/注册</router-link>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const isLogin = ref(false)

</script>

<style lang="scss"  scoped>
header {
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 6rem;
  padding: 0 4rem;
  font-size: 1.6rem;
  color: #000;
  font-weight: 600;
  .logo img {
    height: 42px;
  }
  .login {
    cursor: pointer;
  }
}

</style>