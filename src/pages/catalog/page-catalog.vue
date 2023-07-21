<template>
  <div class="container">
    <transition name="header">
      <header-block />
    </transition>
    <div class="page-catalog">
      <div class="page-catalog__wrap-info">
        <bread-crumbs />
        <div class="page-catalog__wrap-select">
          <select-block
            v-model="selectShowItems"
            :items="showItems"
            class="page-catalog__select"
            @select="optionSelect"
            >Показать
            <p class="select__select-name">{{ selectedName }}</p></select-block
          >
          <select-block :items="sortingElements">Сортировка</select-block>
        </div>
      </div>
      <div class="page-catalog__catalog">
        <filter-block
          :quantity-card="selectedName"
          :open-filter-mobile="openFilterMobile"
          @openFilter="openFilter"
          @closeFilter="closeFilter"
        />
        <!-- <div>
          <catalog-block />
        </div> -->
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

export default {
  name: 'page-catalog',
  components: {
    HeaderBlock,
    FooterBlock,
  },
  data() {
    return {
      selectShowItems: null,
      selectedName: 12,
      openFilterMobile: false,
      showItems: [
        {
          parameter: 6,
        },
        {
          parameter: 12,
        },
        {
          parameter: 24,
        },
        {
          parameter: 36,
        },
        {
          parameter: 48,
        },
        {
          parameter: 60,
        },
      ],
      sortingElements: [
        {
          parameter: 'По популярности',
        },
        {
          parameter: 'По возрастанию цены',
        },
        {
          parameter: 'По убыванию цены',
        },
        {
          parameter: 'Сначала выгодные',
        },
      ],
    };
  },
  methods: {
    optionSelect(item) {
      this.selectedName = item.parameter;
      console.log('selectedName', this.selectedName);
    },
    openFilter() {
      this.openFilterMobile = true;
      console.log('openFilterMobile', this.openFilterMobile);
    },
    closeFilter() {
      this.openFilterMobile = false;
    },
  },
};
</script>

<style src="./page-catalog.less" lang="less" />
