<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li>
        <button class="pagination__button pagination__button_prev">
          <arrow-pagination />
        </button>
      </li>
      <li v-for="item in itemNumbers" :key="item">
        <button
          :class="{ pagination__button: true, 'active-page': numbers }"
          @click="handlerClick(item)"
        >
          {{ item }}
        </button>
      </li>
      <li>
        <button class="pagination__button pagination__button_next">
          <arrow-pagination />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import ArrowPagination from '../../images/arrow.svg?inline';

export default {
  name: 'pagination-block',
  components: {
    ArrowPagination,
  },
  props: {
    numbers: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    itemNumbers() {
      return this.numbers;
    },
  },
  methods: {
    handlerClick(index) {
      this.$emit('clickOnNumber', index);
    },
  },
};
</script>

<style src="./pagination.less" lang="less" />
