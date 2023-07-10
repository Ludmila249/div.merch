<template>
  <div class="container">
    <header-block />
    <div class="page-main">
      <div class="page-main__wrap-info">
        <bread-crumbs />
        <div class="page-main__wrap-select">
          <select-block
            v-model="selectShowItems"
            :items="showItems"
            class="page-main__select"
            @select="optionSelect"
            >Показать
            <p class="select__select-name">{{ selectedName }}</p></select-block
          >
          <select-block :items="sortingElements">Сортировка</select-block>
        </div>
      </div>
      <div class="page-main__catalog">
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
import { mapState } from 'vuex';
import HeaderBlock from '../../layout/header/header.vue';
import FooterBlock from '../../layout/footer/footer.vue';

export default {
  name: 'page-main',
  components: {
    HeaderBlock,
    FooterBlock,
  },
  data() {
    return {
      selectShowItems: null,
      selectedName: 11,
    };
  },
  computed: {
    ...mapState({
      showItems: (state) => state.bunker.showItems,
      sortingElements: (state) => state.bunker.sortingElements,
    }),
  },

  methods: {
    optionSelect(item) {
      this.selectedName = item.parameter;
      console.log('selectedName', this.selectedName);
    },
  },
};
</script>

<style src="./page-main.less" lang="less" />
