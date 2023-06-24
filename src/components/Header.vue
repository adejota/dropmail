<template>
  <header class="flex justify-between">
    <Logo />

    <ButtonIcon
      :name="'BellAlert'"
      :text="'Enable notifications'"
      @handleClick="handleNotificationPermission()"
    />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import ButtonIcon from "./ButtonIcon.vue";

export default {
  name: "Header",

  components: {
    Logo,
    ButtonIcon,
  },

  methods: {
    async handleNotificationPermission() {
      const message =
        "A notification will be sent when you receive a new email.";

      if (!("Notification" in window)) {
        this.$store.commit("setNotificationPermission", false);
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        this.$store.commit("setNotificationPermission", true);
        new Notification(message);
      } else {
        this.$store.commit("setNotificationPermission", false);

        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            this.$store.commit("setNotificationPermission", true);
            new Notification(message);
          }
        });
      }
    },
  },
};
</script>
