<template>
  <div class="bread-crumbs">
    <p class="bread-crumbs__item">Мужское</p>
    <arrow-bread-crumbs class="bread-crumbs__arrow" />
    <p class="bread-crumbs__item">Категории</p>
    <arrow-bread-crumbs class="bread-crumbs__arrow" />
    <p class="bread-crumbs__item bread-crumbs__item_active">Носки</p>
  </div>
</template>

<script>
import ArrowBreadCrumbs from '../../images/arrow.svg?inline';

export default {
  name: 'bread-crumbs',
  components: {
    ArrowBreadCrumbs,
  },
};
</script>

<style src="./bread-crumbs.less" lang="less" />
