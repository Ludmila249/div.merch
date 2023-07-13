<template>
  <div class="container">
    <header-block />
    <div class="page-product-details">
      <bread-crumbs />
      <div class="page-product-details__wrap">
        <div class="page-product-details__info">
          <div class="page-product-details__photo">
            <img src="../../../static/Bracelets.jpg" alt="" />
          </div>
          <div class="page-product-details__characteristics">
            <h3 class="page-product-details__name-product">Socks</h3>
            <p class="page-product-details__text page-product-details__text_number">
              Арт. 123456789
            </p>
            <div class="page-product-details__description">
              <p class="page-product-details__text">Цена</p>
              <p>3990₽</p>
            </div>
            <div class="page-product-details__description">
              <p class="page-product-details__text">Цвет</p>
              <div class="page-product-details__wrap-color">
                <span class="page-product-details__color" style="background-color: #000" />
                <span class="page-product-details__color" style="background-color: #450f71" />
                <span class="page-product-details__color" style="background-color: #501599" />
              </div>
            </div>
            <div class="page-product-details__description">
              <p class="page-product-details__text">Размер</p>
              <div class="page-product-details__wrap-size">
                <span class="page-product-details__size">S</span>
                <span class="page-product-details__size">M</span>
                <span class="page-product-details__size">L</span>
                <span class="page-product-details__size">XL</span>
              </div>
            </div>
            <div
              class="page-product-details__description page-product-details__description_dropdown"
            >
              <div class="page-product-details__dropdown">
                <p class="page-product-details__text">Описание</p>
              </div>
              <div class="page-product-details__list">
                <ul>
                  <li><p>материал: 100% хлопок;</p></li>
                  <li><p>страна-производитель: Китай;</p></li>
                  <li><p>классический крой;</p></li>
                  <li><p>контрастный брендинг;</p></li>
                  <li><p>эластичные манжеты.</p></li>
                </ul>
              </div>
            </div>
            <button class="page-product-details__button">В&nbsp;корзину</button>
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
  name: 'page-product-details',
  components: {
    HeaderBlock,
    FooterBlock,
  },
};
</script>

<style src="./page-product-details.less" lang="less" />
