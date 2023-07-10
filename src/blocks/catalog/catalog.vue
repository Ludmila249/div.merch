<template>
  <div class="catalog">
    <div class="catalog__wrap">
      <card-block v-for="card in cardsList" :key="card.vendorCode" :card="card" />
    </div>
    <pagination-block
      class="catalog__pagination"
      :numbers="getNumber"
      @clickOnNumber="handlerClick"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'catalog-block',
  data() {
    return {
      page: 0,
      number: 0,
    };
  },
  computed: {
    ...mapState({
      catalog: (state) => state.bunker.catalog,
    }),
    cardsList() {
      const data = [[]];
      let count = 11;
      let countIndex = 0;
      const page = this.page || 0;

      this.catalog.forEach((element, index) => {
        if (index <= count) {
          data[countIndex].push(element);
          if (index === count) {
            count += 11;
            countIndex += 1;
            data.push([page]);
          }
        }
      });

      this.number = data.length;

      return data[this.page || 0];
    },

    getNumber() {
      return this.number;
    },
  },
  mounted() {
    console.log('catalog', this.catalog);
    console.log('number', this.number);
    console.log('cardsList', this.cardsList);
  },
  methods: {
    handlerClick(index) {
      this.page = index - 1;
    },
  },
};
</script>

<style src="./catalog.less" lang="less" />
