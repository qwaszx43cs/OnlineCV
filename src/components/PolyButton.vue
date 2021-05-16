<template>
  <div
    class="poly-button"
    :style="{ color }"
    @click="handleClick"
  >
    <i v-if="icon" :class="['fa', `fa-${icon}`]"></i>
  </div>
</template>

<script>
export default {
  name: 'PolyButton',
  props: {
    icon: {
      type: String
    },
    color: {
      type: String,
      default: 'gray'
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss' scoped>
  .poly-button {
    height: 60px;
    width: 60px;
    font-size: 35px;
    line-height: 60px;
    margin: 10px;
    text-align: center;
    color: black;
    transition: 0.5s linear;
    position: relative;
    z-index: 10;
  }

  .poly-button::before, .poly-button::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    transition: 0.5s linear;
  }

  .poly-button:hover {
    transform: scale(.6);
  }

  .poly-button:hover::before {
    border-left: 4px solid;
    border-right: 4px solid;
    /* 二维X轴倾斜 */
    transform: skewX(20deg);
  }

  .poly-button:hover::after {
    border-top: 4px solid;
    border-bottom: 4px solid;
    /* 二维Y轴倾斜 */
    transform: skewY(-20deg);
  }
</style>
