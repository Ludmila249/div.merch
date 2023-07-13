<template>
  <div class="container">
    <header-block />
    <swiper
      :direction="'horizontal'"
      :slides-per-group="1"
      :slides-per-view="1"
      :space-between="0"
      :update-on-window-resize="true"
      :grab-cursor="true"
      :loop="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      class="page-main__slider"
    >
      <swiper-slide>
        <div class="page-main__slide">
          <p class="page-main__text-banner">Новая коллекция от div.merch</p>
          <p class="page-main__banner-title">OFFICE CHIC</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page-main__slide">
          <p class="page-main__text-banner">
            Добро пожаловать в&nbsp;нашу коллекцию одежды! Мы&nbsp;рады предложить вам широкий
            ассортимент моделей, созданных с&nbsp;любовью и&nbsp;вниманием к&nbsp;каждой детали.
          </p>
          <p class="page-main__banner-title">OFFICE CHIC</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page-main__slide">
          <p class="page-main__text-banner">Всегда рядом</p>
          <p class="page-main__banner-title">DIV.MERCH</p>
        </div>
      </swiper-slide>
      <router-link class="page-main__link-catalog" to="/catalog/">В каталог </router-link>
    </swiper>
    <div class="page-main">
      <div class="page-main__wrap-info">
        <div class="page-main__description-shop">
          <div>
            <h2 class="page-main__description-title">Удобная одежда и аксессуары на каждый день</h2>
            <p class="page-main__description-text">
              Производство мерча&nbsp;&mdash; это сложный процесс, состоящий из множества этапов,
              таких как создание дизайна продукта, выбор материалов и цветовой гаммы, упаковка
              продукта для транспортировки и его продажа.
            </p>
          </div>
          <div class="page-main__wrap-img">
            <img class="page-main__img" src="../../../static/main-img1.jpg" alt="" />
          </div>
        </div>
        <div class="page-main__description-shop page-main__description-shop_direction">
          <div class="page-main__wrapper">
            <h2 class="page-main__description-title page-main__description-title_content">
              Как мы создаем наш мерч
            </h2>
            <p class="page-main__description-text">
              Производство мерча&nbsp;&mdash; это сложный процесс, состоящий из множества этапов,
              таких как создание дизайна продукта, выбор материалов и цветовой гаммы, упаковка
              продукта для транспортировки и его продажа.
            </p>
          </div>
          <img class="page-main__img" src="../../../static/main-img2.jpg" alt="" />
        </div>
        <div class="page-main__description-shop page-main__description-shop_direction">
          <p class="page-main__description-text">
            Наша коллекция включает в&nbsp;себя все необходимое для создания стильного
            и&nbsp;удобного гардероба: от&nbsp;повседневных базовых вещей до&nbsp;элегантных нарядов
            для особых случаев.
          </p>
          <p class="page-main__description-text">
            Мы используем только высококачественные материалы, чтобы гарантировать комфорт
            и&nbsp;долговечность наших изделий. Наша одежда подойдет не&nbsp;только для
            повседневного ношения, но&nbsp;и&nbsp;для спорта, путешествий и&nbsp;других активностей.
          </p>
          <p class="page-main__description-text">
            В нашей коллекции вы&nbsp;найдете разнообразие фасонов и&nbsp;цветов, чтобы подобрать
            идеальную вещь под свой стиль и&nbsp;настроение. Мы&nbsp;также следим за&nbsp;последними
            тенденциями моды, чтобы предоставлять вам актуальные и&nbsp;модные варианты для создания
            своего образа.
          </p>
        </div>
        <div class="page-main__slider-product">
          <swiper
            :direction="'horizontal'"
            :slides-per-group="1"
            :slides-per-view="3"
            :space-between="15"
            :update-on-window-resize="true"
            :grab-cursor="true"
            :auto-height="true"
            :navigation="{
              prevEl: '.navigation__button-prev',
              nextEl: '.navigation__button-next',
            }"
          >
            <swiper-slide v-for="card in catalog.slice(0, 12)" :key="card.vendorCode">
              <card-block :card="card" />
            </swiper-slide>
          </swiper>
          <div class="navigation">
            <div class="navigation__button navigation__button-prev">
              <arrow-navigation class="navigation__arrow" />
            </div>
            <div class="navigation__button navigation__button-next">
              <arrow-navigation class="navigation__arrow" />
            </div>
          </div>
        </div>
        <div class="page-main__description-shop page-main__description-shop_direction">
          <p class="page-main__description-text">
            Мы&nbsp;уверены, что в&nbsp;нашей коллекции каждый найдет что-то по&nbsp;своему вкусу.
            Приглашаем вас ознакомиться с&nbsp;нашим ассортиментом и&nbsp;выбрать свою новую любимую
            вещь!
          </p>
          <div class="page-main__map-wrap">
            <div class="page-main__map" style="position: relative; overflow: hidden">
              <a
                href="https://yandex.ru/maps/36/stavropol/?utm_medium=mapframe&utm_source=maps"
                style="color: #eee; font-size: 12px; position: absolute; top: 0px"
                >Ставрополь</a
              ><a
                href="https://yandex.ru/maps/36/stavropol/house/ulitsa_45_ya_parallel_6/YEgYfwZpQU0EQFpufXV4eXhqZA==/?from=mapframe&ll=41.919842%2C44.998289&utm_medium=mapframe&utm_source=maps&z=19.37"
                style="color: #eee; font-size: 12px; position: absolute; top: 14px"
                >Улица 45-я Параллель, 6 — Яндекс Карты</a
              ><iframe
                class="page-main__iframe"
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=41.919842%2C44.998289&mode=whatshere&whatshere%5Bpoint%5D=41.919868%2C44.998554&whatshere%5Bzoom%5D=17&z=19.37"
                width="560"
                height="400"
                frameborder="1"
                allowfullscreen="true"
                style="position: relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Navigation, Autoplay } from 'swiper';

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';
import 'swiper/swiper.less';
import 'swiper/components/effect-fade';
import 'swiper/components/navigation/navigation.less';
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

import arrowNavigation from '../../images/arrow.svg?inline';

SwiperCore.use([Navigation, Autoplay]);

export default {
  name: 'page-main',
  components: {
    HeaderBlock,
    FooterBlock,
    Swiper,
    SwiperSlide,
    arrowNavigation,
  },
  computed: {
    ...mapState({
      catalog: (state) => state.bunker.catalog,
    }),
  },
};
</script>

<style src="./page-main.less" lang="less" />
