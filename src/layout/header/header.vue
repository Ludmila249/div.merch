<template>
  <div class="container">
    <div class="header">
      <logo-div class="header__logo-div" />
      <div class="header__menu">
        <button :class="bem('header__burger', { openMenuMobile })" @click="clickBurger">
          <span class="header__burger-line header__burger-line_top" />
          <span class="header__burger-line" />
          <span class="header__burger-line header__burger-line_bottom" />
        </button>
        <div :class="bem('header__navigation-wrap', { openMenuMobile })" />
        <nav :class="bem('header__navigation', { openMenuMobile })">
          <button class="header__button-close-mobile" @click="closeMenu">
            <div>
              <span class="header__close header__close_top" />
              <span class="header__close header__close_bottom" />
            </div>
          </button>
          <router-link
            v-for="item in menu"
            :key="item.text"
            class="header__link-nav"
            :to="item.href"
            >{{ item.text }}</router-link
          >
        </nav>
      </div>
      <div class="header__icon-tools">
        <div class="header__search-wrap">
          <input :class="bem('header__search', { openSearch })" type="search" />
          <button class="header__wrap-icon" @click="clickSearch">
            <icon-search class="header__icon" />
          </button>
        </div>
        <a href="#" class="header__wrap-icon">
          <icon-user class="header__icon" />
        </a>
        <router-link to="/basket/" class="header__wrap-icon">
          <icon-basket class="header__icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      openMenuMobile: false,
      openSearch: false,
      menu: [
        {
          text: 'Главная',
          href: '/',
        },
        {
          text: 'Коллекции',
          href: '#',
        },
        {
          text: 'Все товары',
          href: '/catalog/',
        },
        {
          text: 'Категории',
          href: '#',
        },
      ],
    };
  },
  methods: {
    clickSearch() {
      this.openSearch = !this.openSearch;
    },
    clickBurger() {
      this.openMenuMobile = true;
    },
    closeMenu() {
      this.openMenuMobile = false;
    },
  },
};
</script>

<style src="./header.less" lang="less" />
