<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import lessVars from '@/styles/vars.less';

export default {
  created() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.$store.commit('setLessVars', lessVars);
    },
  },
};
</script>

<style src="./app.less" lang="less" />
