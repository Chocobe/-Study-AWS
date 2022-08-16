<template>
  <div class="App">
    <h1 class="App-title">
      S3 와 CloudFront 를 사용한 정적 웹사이트
    </h1>

    <div class="App-wrapper">
      <MyCounter />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MyCounter from "./components/MyCounter.vue";

export default defineComponent({
  setup() {
    //
  },

  components: {
    MyCounter,
  },
});
</script>