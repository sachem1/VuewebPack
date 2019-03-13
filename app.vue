<template>
  <div>
    <v-title title="Vue 组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <img src="./images/timg.jpg" style="width:200px;">
    </p>
  </div>
</template>
<script>
//导入组件
import vTitle from "./title.vue";
import vButton from "./button.vue";

export default {
  components: {
    vTitle,
    vButton
  },
  methods: {
    handleClick(e) {
      console.log(e);
    }
  },
  data() {
    return {
      name: "Vue.js"
    };
  }
};
</script>
<style>
div {
  color: #f60;
}

</style>

