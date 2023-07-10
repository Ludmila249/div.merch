<template>
  <div class="container">
    <div class="footer">
      <div class="footer__top">
        <div class="footer__chapter">
          <p class="footer__chapter-title">Онлайн магазин</p>
          <ul>
            <li class="footer__chapter-item">
              <a href="#">+7 (928) 700-80-90</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">+7 (928) 700-80-90</a>
            </li>
          </ul>
        </div>
        <div class="footer__chapter">
          <p class="footer__chapter-title">Офлайн магазин</p>
          <ul>
            <li class="footer__chapter-item">
              <p>Москва, Ленина 220</p>
            </li>
          </ul>
        </div>
        <div class="footer__chapter">
          <p class="footer__chapter-title">Поддержка</p>
          <ul>
            <li class="footer__chapter-item">
              <a href="#">Помощь</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Возврат</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Доставка и оплата</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Программа лояльности</a>
            </li>
          </ul>
        </div>
        <div class="footer__chapter">
          <p class="footer__chapter-title">Информация</p>
          <ul>
            <li class="footer__chapter-item">
              <a href="#">Контакты</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Магазины</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Блог</a>
            </li>
          </ul>
        </div>
        <div class="footer__chapter">
          <p class="footer__chapter-title">Обратная связь</p>
          <ul>
            <li class="footer__chapter-item">
              <a href="#">Подписаться на email рассылку</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Див в вк</a>
            </li>
            <li class="footer__chapter-item">
              <a href="#">Див в телеграме</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="footer__line" />
      <div class="footer__bottom">
        <p class="footer__year">© div.merch, 2022</p>
        <div class="footer__payment-systems">
          <icon-master-card />
          <icon-mir />
          <icon-visa />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconMasterCard from '../../images/MasterCard.svg?inline';
import IconMir from '../../images/Mir.svg?inline';
import IconVisa from '../../images/Visa.svg?inline';

export default {
  name: 'footer-block',
  components: {
    IconMasterCard,
    IconMir,
    IconVisa,
  },
};
</script>

<style src="./footer.less" lang="less" />
