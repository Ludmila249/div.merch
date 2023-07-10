<template>
  <div class="container">
    <div class="header">
      <logo-div />
      <nav class="header__navigation">
        <a v-for="item in menu" :key="item.text" class="header__link-nav" :href="item.href">{{
          item.text
        }}</a>
      </nav>
      <div class="header__icon-tools">
        <button class="header__wrap-icon">
          <icon-search class="header__icon" />
        </button>
        <a href="#" class="header__wrap-icon">
          <icon-user class="header__icon" />
        </a>
        <a href="#" class="header__wrap-icon">
          <icon-basket class="header__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LogoDiv from '../../images/logo-div.svg?inline';
import IconSearch from '../../images/search.svg?inline';
import IconUser from '../../images/user.svg?inline';
import IconBasket from '../../images/basket.svg?inline';

export default {
  name: 'header-block',
  components: {
    LogoDiv,
    IconSearch,
    IconUser,
    IconBasket,
  },
  computed: {
    ...mapState({
      menu: (state) => state.bunker.menu,
    }),
  },
};
</script>

<style src="./header.less" lang="less" />
