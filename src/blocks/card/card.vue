<template>
  <router-link to="/product-details/" class="card">
    <img class="card__photo-product" :src="card.src" alt="" />
    <p class="card__type-product">{{ card.type }}</p>
    <p class="card__name" v-html="card.name" />
    <p class="card__price">{{ card.price }} ₽</p>
  </router-link>
</template>

<script>
export default {
  name: 'card-block',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style src="./card.less" lang="less" />
