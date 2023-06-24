<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import BellAlert from "./BellAlert.vue";
import DocumentDuplicate from "./DocumentDuplicate.vue";
import ArrowPath from "./ArrowPath.vue";
import ArrowLeft from "./ArrowLeft.vue";

export default {
  name: "Icon",

  props: {
    name: { type: String, required: true },
  },

  components: {
    BellAlert,
    DocumentDuplicate,
    ArrowPath,
    ArrowLeft,
  },
};
</script>
