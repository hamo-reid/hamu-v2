<template>
  <DashboardSideBar />
  <router-view></router-view>
</template>

<script setup>
import { useRoute } from 'vue-router'
import DashboardSideBar from './DashboardSideBar.vue';

</script>

<style scoped></style>