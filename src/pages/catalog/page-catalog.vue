<template>
  <div class="container">
    <header-block />
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
        <filter-block :quantity-card="selectedName" />
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
  },
};
</script>

<style src="./page-catalog.less" lang="less" />
