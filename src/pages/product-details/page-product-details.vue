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
            <h3 class="page-product-details__name-product">Браслеты</h3>
            <p class="page-product-details__text page-product-details__text_number">
              Арт. 79882687895
            </p>
            <div class="page-product-details__description">
              <p class="page-product-details__text">Цена</p>
              <p>4400₽</p>
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
                  <li><p>материал: сталь;</p></li>
                  <li><p>страна-производитель: Россия;</p></li>
                  <li><p>классическое плетение;</p></li>
                  <li><p>контрастный брендинг;</p></li>
                </ul>
              </div>
            </div>
            <button class="page-product-details__button">В&nbsp;корзину</button>
          </div>
        </div>
      </div>
      <div>
        <tabs class="tabs">
          <tab-item name="Отзывы">
            <div class="wrap-questions">
              <div class="question">
                <div class="question__info-user">
                  <img class="question__photo-user" src="../../../static/user.png" alt="" />
                  <div>
                    <p class="question__user-name">name</p>
                    <p>14.22.1950, 20:19</p>
                  </div>
                </div>
                <p class="question__question">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate soluta
                  magnam iste illum facere, hic possimus nemo culpa sed qui tempore itaque, suscipit
                  repudiandae pariatur facilis totam! Accusamus vel obcaecati eum veritatis.
                  Consequuntur minus animi maxime aliquam ut culpa.
                </p>
              </div>
              <div class="question">
                <div class="question__info-user">
                  <img class="question__photo-user" src="../../../static/user.png" alt="" />
                  <div>
                    <p class="question__user-name">name</p>
                    <p>14.22.999, 20:19</p>
                  </div>
                </div>
                <p class="question__question">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde error
                  consequuntur ducimus, iste optio eveniet distinctio autem, porro, inventore
                  laborum eaque impedit harum veritatis?
                </p>
              </div>
            </div>
          </tab-item>
          <tab-item name="Вопросы">
            <div class="question">
              <div class="question__info-user">
                <img class="question__photo-user" src="../../../static/user.png" alt="" />
                <div>
                  <p class="question__user-name">name</p>
                  <p>14.22.1093, 20:19</p>
                </div>
              </div>
              <p class="question__question">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur mollitia
                excepturi magnam ab doloribus alias veritatis maxime nobis totam dolorum quae
                nesciunt amet similique, nemo, nostrum repudiandae earum vel.
              </p>
              <div>
                <p class="question__brand">Представитель бренда</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis corporis aut
                  exercitationem! Voluptatem nam accusamus at magni corrupti. Atque, nihil.
                </p>
              </div>
            </div>
            <div class="question">
              <div class="question__info-user">
                <img class="question__photo-user" src="../../../static/user.png" alt="" />
                <div>
                  <p class="question__user-name">name</p>
                  <p>14.22.1193, 20:19</p>
                </div>
              </div>
              <p class="question__question">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, incidunt!
              </p>
              <div>
                <p class="question__brand">Представитель бренда</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem
                  fugit illo.
                </p>
              </div>
            </div>
          </tab-item>
        </tabs>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import { Tabs, TabItem } from 'vue-material-tabs';
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

export default {
  name: 'page-product-details',
  components: {
    HeaderBlock,
    FooterBlock,
    Tabs,
    TabItem,
  },
};
</script>

<style src="./page-product-details.less" lang="less" />
