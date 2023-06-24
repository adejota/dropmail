<template>
  <aside
    class="w-full md:w-1/4 mr-4"
    :class="{ 'hidden md:block': $store.state.selectedMail }"
  >
    <p class="flex items-center p-2 md:p-4 font-light text-2xl">
      <span>Inbox</span>
    </p>

    <div v-if="$store.state.mails.length">
      <InboxItem />
    </div>

    <div v-else>
      <p class="p-2 md:p-4">Empty</p>
    </div>
  </aside>
</template>

<script>
import InboxItem from "../components/InboxItem.vue";

export default {
  name: "Inbox",

  components: {
    InboxItem,
  },
};
</script>
