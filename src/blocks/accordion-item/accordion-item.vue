<template>
  <div :class="bem('accordion-item', { open })">
    <div class="accordion-item__wrap" @click="handler">
      <p class="accordion-item__text">{{ elem.title }}</p>
      <div class="accordion-item__button-arrow">
        <svg viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1L11.4224 11.0055C12.5833 12.12 14.4167 12.12 15.5776 11.0055L26 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="accordion-item__wrap-questions" :style="{ height: `${height}px` }">
      <div ref="text" class="accordion-item__questions">
        <ol class="accordion-item__text-answer">
          <li v-for="item in elem.list" :key="item.index">
            <p v-html="item" />
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion-item',
  props: {
    elem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      open: false,
      height: 0,
    };
  },
  watch: {
    open(value) {
      this.height = value ? this.$refs.text.offsetHeight : 0;
    },
  },
  mounted() {
    window.addEventListener('resize', this.resize);
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    handler() {
      this.open = !this.open;
    },
    resize() {
      if (this.open) {
        this.height = this.$refs.text.offsetHeight;
      }
    },
  },
};
</script>

<style src="./accordion-item.less" lang="less" />
