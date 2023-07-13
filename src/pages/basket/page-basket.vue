<template>
  <div class="container">
    <header-block />
    <div class="page-basket">
      <div>page-basket</div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

export default {
  name: 'page-basket',
  components: {
    HeaderBlock,
    FooterBlock,
  },
};
</script>

<style src="./page-basket.less" lang="less" />
