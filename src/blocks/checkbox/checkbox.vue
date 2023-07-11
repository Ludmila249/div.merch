<template>
  <div class="checkbox">
    <div v-if="themeCheckbox === 'typeSize'" class="size">
      <div class="size__size-distance">
        <label class="size__type-size">
          <input
            :id="elem.name"
            :name="elem.name"
            :value="elem.name"
            type="checkbox"
            @change="checkedItem(elem)"
          />
          <span>{{ elem.size }}</span>
        </label>
      </div>
    </div>
    <div v-else-if="themeCheckbox === 'typeColor'" class="color">
      <div class="color__color">
        <label class="color__color-check-box">
          <input
            :id="elem.name"
            :name="elem.name"
            :value="elem.name"
            type="checkbox"
            @change="checkedItem(elem)"
          />
          <span
            :class="bem('color__checkbox', { white: elem.background === '#FFFFFF' })"
            :style="{ backgroundColor: elem.background }"
          />
        </label>
      </div>
    </div>
    <div v-else class="standard">
      <label :for="elem.name" class="standard__standard">
        <input
          :id="elem.name"
          :name="elem.name"
          :value="elem.name"
          type="checkbox"
          @change="checkedItem(elem)"
        />
        <span />
        <p>{{ elem.label }}</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox-block',
  props: {
    elem: {
      type: Object,
      default: () => {},
    },
    listItem: {
      type: Object,
      default: () => {},
    },
    themeCheckbox: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    checkedItem(elem) {
      this.$emit('parameterToFilter', elem.name, this.listItem.category);
    },
  },
};
</script>

<style src="./checkbox.less" lang="less" />
