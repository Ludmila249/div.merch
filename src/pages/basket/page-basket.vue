<template>
  <div class="container">
    <header-block />
    <div class="page-basket">
      <div class="basket">
        <div class="basket__list-product">
          <h1 class="basket__title">Корзина</h1>
          <div class="basket__wrap-product">
            <img class="basket__img-product" src="../../../static/keyrings-basket.png" alt="" />
            <div class="basket__info-product">
              <div class="basket__row">
                <p class="basket__">Брелоки, по игре Among Us</p>
                <p class="basket__">2 550 ₽</p>
              </div>
              <p>Lorem, ipsum.</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>Оплата онлайн</p>
            </div>
          </div>
        </div>
        <div class="basket__price">
          <div class="basket__row">
            <p class="basket__text">Товары, 1 шт.</p>
            <p class="basket__text">2 550 ₽</p>
          </div>
          <div class="basket__row">
            <p class="basket__emphasis">Итого</p>
            <p class="basket__emphasis">2 550 ₽</p>
          </div>
          <button class="basket__button">Заказать</button>
          <div class="basket__checkbox">
            <span class="basket__checked" />
            <p class="basket__checkbox-text">
              Соглашаюсь с&nbsp;<a class="basket__rules" href="#"
                >правилами пользования интернет-магазина</a
              >
            </p>
          </div>
        </div>
      </div>
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
