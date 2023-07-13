<template>
  <div class="container">
    <div class="page-product-details">
      <header-block />
      <div class="page-main">product-detail</div>
      <footer-block />
    </div>
  </div>
</template>

<script>
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

export default {
  name: 'page-product-details',
  components: {
    HeaderBlock,
    FooterBlock,
  },
};
</script>

<style src="./page-product-details.less" lang="less" />
