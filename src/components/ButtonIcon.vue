<template>
  <button
    @click="$emit('handleClick')"
    class="bg-violet-900 hover:bg-violet-800 flex items-center focus:border-violet-900 rounded-lg p-2 transition-all disabled:bg-zinc-700 disabled:text-zinc-300 disabled:cursor-not-allowed"
    :class="class"
    v-bind="$props"
  >
    <Icon :name="name" class="w-6 h-6 md:mr-2 text-violet-300" />
    <span class="hidden md:block">{{ text }}</span>
  </button>
</template>

<script>
import Icon from "./Icon/index.vue";

export default {
  name: "ButtonIcon",

  props: {
    name: { String, required: true },
    text: { String, required: true },
    class: { String, required: false, default: "" },
  },

  components: {
    Icon,
  },
};
</script>
