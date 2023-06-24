<template>
  <div class="px-4 py-8 md:py-12 flex flex-col justify-center items-center">
    <div class="min-w-full md:min-w-[75%] lg:min-w-[50%]">
      <label for="email" class="mb-2">Your temporary email address:</label>

      <div class="flex mb-4 w-full">
        <input
          :value="$store.state.addresses[0]?.address || '...'"
          type="email"
          name="email"
          id="email"
          class="bg-zinc-900 border-2 border-zinc-600 focus:outline-none p-2 rounded-l-lg w-full"
          readonly
        />

        <ButtonIcon
          :name="'DocumentDuplicate'"
          :text="copyButtonText"
          @handleClick="copy()"
          :disabled="
            copyButtonText === 'Copied!' || !$store.state.addresses.length
          "
          :class="'rounded-none rounded-r-lg'"
        />
      </div>

      <div class="flex items-center justify-center mt-8 md:mt-0">
        <span class="mr-4">Autorefresh in {{ seconds }}</span>

        <ButtonIcon
          :name="'ArrowPath'"
          :text="'Refresh'"
          @handleClick="$emit('refresh')"
          :disabled="!$store.state.addresses.length"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from "./ButtonIcon.vue";

export default {
  name: "TemporaryEmailPanel",

  props: {
    seconds: { type: Number, required: true },
  },

  components: {
    ButtonIcon,
  },

  data() {
    return {
      copyButtonText: "Copy",
    };
  },

  methods: {
    copy() {
      if (!this.$store.state.addresses[0]) {
        return;
      }

      navigator.clipboard.writeText(this.$store.state.addresses[0].address);
      this.copyButtonText = "Copied!";

      setTimeout(() => {
        this.copyButtonText = "Copy";
      }, 2500);
    },
  },
};
</script>
