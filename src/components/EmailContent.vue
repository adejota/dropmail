<template>
  <section
    class="flex flex-col flex-1 whitespace-pre-line break-all"
    :class="{ 'hidden md:block': !$store.state.selectedMail }"
  >
    <button @click="clearSelectedMail()" class="md:hidden flex items-center">
      <Icon name="ArrowLeft" class="w-6 h-6 transition-all" />
      <span class="flex items-center p-2 md:p-4 font-light text-2xl">
        Inbox
      </span>
    </button>

    <div
      class="bg-zinc-800 border-2 border-violet-900 rounded-lg p-4 md:p-6 w-full h-full"
    >
      <div v-if="$store.state.selectedMail">
        <p class="text-xl font-bold text">
          {{ $store.state.selectedMail.headerSubject }}
        </p>
        <p class="text-xs font-semibold text-violet-300">
          {{ $store.state.selectedMail.fromAddr }}
        </p>
        <div class="mt-4">{{ $store.state.selectedMail.text }}</div>
      </div>

      <div v-else class="hidden md:block">
        <p class="text-xl font-bold mb-4">Welcome</p>
        <p v-if="$store.state.mails.length">
          Select an email from inbox to view its contents.
        </p>
        <p v-else>You haven't received any emails.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from "./Icon/index.vue";

export default {
  name: "EmailContent",

  components: {
    Icon,
  },

  methods: {
    clearSelectedMail() {
      this.$store.commit("setSelectedMail", null);
    },
  },
};
</script>

<style>
</style>