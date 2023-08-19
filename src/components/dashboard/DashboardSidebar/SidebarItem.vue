<template>
  <li class="bar-item">
    <router-link :to="toRoute">
      <slot>
        
      </slot>
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  toRoute: String
})

</script>

<style lang="scss">

</style>