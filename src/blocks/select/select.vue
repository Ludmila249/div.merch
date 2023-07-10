<template>
  <div class="select">
    <div class="select__header" @click="openMenuNumberItem">
      <slot /><arrow-select class="select__arrow" />
    </div>
    <div v-if="openItemSelect" class="select__main">
      <div v-for="item in items" :key="item.index" class="select__item" @click="selectOption(item)">
        <p>{{ item.parameter }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowSelect from '../../images/arrow.svg?inline';

export default {
  name: 'select-block',
  components: {
    ArrowSelect,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      openItemSelect: false,
      selectItem: null,
    };
  },
  // mounted() {
  //   document.addEventListener('click', this.hideSelect.bind(this), true);
  // },
  // destroyed() {
  //   document.removeEventListener('click', this.hideSelect.bind);
  // },
  methods: {
    openMenuNumberItem() {
      this.openItemSelect = !this.openItemSelect;
    },
    selectOption(item) {
      this.$emit('select', item);
      this.openItemSelect = false;
      console.log(item);
    },
    hideSelect() {
      this.openItemSelect = false;
    },
  },
};
</script>

<style src="./select.less" lang="less" />
