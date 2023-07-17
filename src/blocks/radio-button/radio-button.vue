<template>
  <div class="radio-button">
    <div class="color">
      <div class="color__color">
        <label class="color__color-check-box">
          <input id="elem.name" name="elem.name" value="elem.name" type="radio" />
          <span class="color__checkbox" />
        </label>
      </div>
    </div>
    <div class="size">
      <div class="size__size-distance">
        <label class="size__type-size">
          <input id="elem.name" name="elem.name" value="elem.name" type="radio" />
          <span>s</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio-button',
};
</script>

<style src="./radio-button.less" lang="less" />
