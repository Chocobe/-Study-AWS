<template>
  <div class="MyCounter">
    <h2 class="MyCounter-counter">
      카운터: {{ counter }}
    </h2>

    <div class="MyCounter-wrapper">
      <button 
        v-for="name in buttons"
        :key="name"
        @click="() => onClick(name)"
        :name="name"
        class="MyCounter-wrapper-button"
      >
        {{ parseToCamel(name) }}
      </button>
    </div>
  </div>
</template>

<script>
import { 
  defineComponent,
  ref,
  reactive,
  computed,
} from "vue";

export default defineComponent({
  setup() {
    const counter = ref(0);

    const buttonInfos = reactive({
      increase: 1,
      decrease: -1,
    });

    const buttons = computed(() => Object.keys(buttonInfos));

    const parseToCamel = name => {
      return name[0].toUpperCase() + name.substring(1);
    }

    const onClick = name => {
      counter.value += buttonInfos[name]
    }

    return {
      counter,
      buttons,
      onClick,
      parseToCamel,
    };
  },
});
</script>

<style>
.MyCounter-wrapper-button {
  margin: 0 4px;
}
</style>