<template>
  <div class="catalog">
    <div class="catalog__filter filter">
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
      <!-- <div class="filter__chapter">
        <p class="filter__chapter-title">Пол</p>
        <div v-for="item in gender" :key="item.gender" class="filter__check-box-wrap">
          <label :for="item.name" class="filter__check-box">
            <input
              :id="item.name"
              :name="item.name"
              :value="item.name"
              type="checkbox"
              @change="checkedItemFilter(item.name)"
            />
            <span />
            <p>{{ item.gender }}</p>
          </label>
        </div>
      </div>
      <div class="filter__chapter">
        <p class="filter__chapter-title">Категория</p>
        <div v-for="item in category" :key="item.label" class="filter__check-box-wrap">
          <label :for="item.name" class="filter__check-box">
            <input
              :id="item.name"
              v-model="arrayChecked"
              :name="item.name"
              type="checkbox"
              :value="item.name"
              @change="checkedItemFilter(item.name)"
            />
            <span />
            <p>{{ item.label }}</p>
          </label>
        </div>
      </div>
      <div class="filter__chapter">
        <p class="filter__chapter-title">Размер</p>
        <div class="filter__size-wrap">
          <div v-for="item in size" :key="item.size" class="filter__size-distance">
            <label class="filter__size-check-box">
              <input :name="item.name" type="checkbox" @change="checkedItemFilter(item.name)" />
              <span>{{ item.size }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="filter__chapter">
        <p class="filter__chapter-title">Цвет</p>
        <div class="filter__color-wrap">
          <div v-for="item in color" :key="item.background" class="filter__color">
            <label class="filter__color-check-box">
              <input :name="item.name" type="checkbox" />
              <span
                :class="bem('filter__checkbox', { white: item.background === '#FFFFFF' })"
                :style="{ backgroundColor: item.background }"
              />
            </label>
          </div>
        </div>
      </div> -->
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
    </div>
    <div class="catalog__list-product">
      <div class="catalog__list-wrap">
        <card-block v-for="card in cardsList" :key="card.vendorCode" :card="card" />
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
      default: 11,
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
      // category: (state) => state.bunker.category,
      // size: (state) => state.bunker.size,
      // color: (state) => state.bunker.color,
      // gender: (state) => state.bunker.gender,
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
    console.log('arrayChecked', this.arrayChecked);
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

        const data = this.catalog.filter((elem) => {
          if (elem[category] == value && Boolean(typeof elem[category] === 'string')) {
            return elem
          } else if(elem[category].includes(value)) {
            return elem;
          }
        });
        this.sortedProductsPrice.push(...data);
      }

      if (this.arrayChecked.length === 0) {
        this.sortedProductsPrice = [...this.catalog];
      }
    },
    clickArray() {
      console.log('this.arrayChecked', this.arrayChecked);
    },
  },
};
</script>

<style src="./filter.less" lang="less" />
