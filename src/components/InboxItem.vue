<template>
  <div
    v-for="mail in $store.state.mails"
    :key="mail.downloadUrl"
    @click="selectMail(mail)"
    class="p-2 md:p-4 mb-2 cursor-pointer rounded-lg border-2 transition-all hover:bg-zinc-700"
    :class="
      mail.downloadUrl === $store.state.selectedMail?.downloadUrl
        ? 'border-violet-900 bg-zinc-800'
        : 'border-zinc-900'
    "
  >
    <p class="text-lg font-semibold truncate overflow-hidden">
      {{ mail.headerSubject }}
    </p>
    <p class="text-sm truncate overflow-hidden">{{ mail.text }}</p>
    <p class="text-xs text-violet-300 truncate overflow-hidden">
      {{ mail.fromAddr }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InboxItem",

  methods: {
    selectMail(mail) {
      this.$store.commit("setSelectedMail", mail);
    },
  },
};
</script>
