<template>
  <div class="catalog">
    <button class="filter__open-filter-mobile" @click="openedFilterMobile">
      <img class="filter__icon-filter" src="../../images/filter-icon.png" alt="" />
    </button>
    <div :class="bem('catalog__filter-wrap', { openFilterMobile })" @click.self="closedFilter">
      <button class="filter__close-filter-mobile" @click="closedFilter">
        <img src="../../images//cross.png" alt="" />
      </button>
      <div :class="bem('catalog__filter filter', { openFilterMobile })">
        <div class="filter__chapter">
          <p class="filter__chapter-title">Цена</p>
          <div class="filter__price">
            <p>от {{ minPrice }}₽</p>
            <p>до {{ maxPrice }}₽</p>
          </div>
          <div class="filter__range-slider">
            <input
              v-model.number="minPrice"
              type="range"
              min="100"
              max="24000"
              step="1"
              @change="setRangeSlider"
            />
            <input
              v-model.number="maxPrice"
              type="range"
              min="100"
              max="24000"
              step="1"
              @change="setRangeSlider"
            />
          </div>
        </div>
        <div v-for="item in filter" :key="item.title" class="filter__section">
          <p class="filter__section-title">{{ item.title }}</p>
          <div
            :class="
              bem('filter__wrap-item', {
                itemsRow: item.themeCheckbox === 'typeSize' || item.themeCheckbox === 'typeColor',
              })
            "
          >
            <checkbox-block
              v-for="elem in item.listItemFiltered"
              :key="elem.name"
              :elem="elem"
              :list-item="item"
              :theme-checkbox="item.themeCheckbox"
              :class="bem('checkbox-block', { size: item.themeCheckbox === 'typeSize' })"
              @parameterToFilter="listChecked"
              @change="clickArray"
            />
          </div>
        </div>
        <div class="catalog__button">
          <button type="button" class="catalog__button-reset" @click="filterReset">Сбросить</button>
        </div>
      </div>
    </div>
    <div class="catalog__list-product">
      <div class="catalog__list-wrap">
        <card-block
          v-for="card in cardsList"
          :key="card.vendorCode"
          class="catalog__card"
          :card="card"
        />
      </div>
      <pagination-block
        class="catalog__pagination"
        :numbers="getNumber"
        @clickOnNumber="handlerClick"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'filter-block',
  props: {
    quantityCard: {
      type: Number,
      default: 12,
    },
    openFilterMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      minPrice: 100,
      maxPrice: 24000,
      sortedProductsPrice: [],
      page: 0,
      number: 0,
      arrayChecked: [],
    };
  },
  computed: {
    ...mapState({
      catalog: (state) => state.bunker.catalog,
      filter: (state) => state.bunker.filter,
    }),

    cardsList() {
      const data = [[]];
      let count = this.quantityCard;
      let countIndex = 0;
      const page = this.page || 0;

      this.sortedProductsPrice.forEach((element, index) => {
        if (index <= count) {
          data[countIndex].push(element);
          if (index === count) {
            count += this.quantityCard;
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
    this.sortByPrice();
  },
  methods: {
    handlerClick(index) {
      this.page = index - 1;
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        const temporaryVariable = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temporaryVariable;
      }
      this.sortByPrice();
    },
    sortByPrice() {
      const vm = this;
      if (this.arrayChecked.length === 0) {
        this.sortedProductsPrice = [...this.catalog];
      }
      this.sortedProductsPrice = this.sortedProductsPrice.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
    },
    // checkedItemFilter(value) {
    //   this.sortedProductsPrice = [...this.catalog];
    //   this.sortedProductsPrice = this.sortedProductsPrice.filter((elem) => elem.category === value);
    //   this.sortByPrice(true);
    // },
    listChecked(value, category) {
      const itemIndex = this.arrayChecked.indexOf(value);

      if (this.sortedProductsPrice.length === this.catalog.length) {
        this.sortedProductsPrice = [];
      }

      if (itemIndex !== -1) {
        this.arrayChecked.splice(itemIndex, 1);
        this.sortedProductsPrice = this.sortedProductsPrice.filter(
          (elem) => elem[category] !== value
        );
      } else {
        this.arrayChecked.push(value);

        console.log('this.arrayChecked', this.arrayChecked);
        if (this.arrayChecked.length >= 2) {

          this.arrayChecked.forEach(elem => {
            this.sortedProductsPrice = this.sortedProductsPrice.filter((item) => {
              if (item[category] === elem && Boolean(typeof item[category] === 'string')) {
                return item;
              } else if (item[category.toLowerCase()].includes(elem)) {
                return item;
              }
              return null;
            });
          });
        } else {
          const data = this.catalog.filter((elem) => {
            if (elem[category] === value && Boolean(typeof elem[category] === 'string')) {
              return elem;
            } else if (elem[category.toLowerCase()].includes(value)) {
              return elem;
            }
            return null;
          });
          this.sortedProductsPrice.push(...data);
        }
      }

      if (this.arrayChecked.length === 0) {
        this.sortedProductsPrice = [...this.catalog];
      }
    },
    clickArray() {
      console.log('this.arrayChecked', this.arrayChecked);
    },
    filterReset() {
      this.minPrice = 100;
      this.maxPrice = 24000;
      this.sortedProductsPrice = [...this.catalog];
      this.arrayChecked.length = 0;
    },
    openedFilterMobile() {
      console.log('click');
      this.$emit('openFilter', this.openFilterMobile);
    },
    closedFilter() {
      this.$emit('closeFilter', this.openFilterMobile);
    },
  },
};
</script>

<style src="./filter.less" lang="less" />
