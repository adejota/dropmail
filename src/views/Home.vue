<template>
  <TemporaryEmailPanel :seconds="seconds" @refresh="refresh()" />

  <main class="flex flex-1">
    <Inbox />

    <EmailContent />
  </main>
</template>

<script>
import TemporaryEmailPanel from "../components/TemporaryEmailPanel.vue";
import Inbox from "../components/Inbox.vue";
import EmailContent from "../components/EmailContent.vue";

export default {
  name: "Home",

  components: {
    TemporaryEmailPanel,
    Inbox,
    EmailContent,
  },

  data() {
    return {
      checkInboxInterval: null,
      seconds: 15,
    };
  },

  async created() {
    this.checkNotificationPermission();
    const hasStore = this.$store.state.id && this.$store.getters.getAddress;
    let isValidAddress = false;

    if (hasStore) {
      isValidAddress = await this.checkIfAddressIsValid(
        this.$store.getters.getAddress
      );
    }

    if (!hasStore || (hasStore && !isValidAddress)) {
      this.$store.commit("clearSession");
      await this.introduceSession();
    }

    await this.getMails();

    this.setCheckInboxInterval();
  },

  beforeUnmount() {
    clearInterval(this.checkInboxInterval);
  },

  methods: {
    async introduceSession() {
      const query = `mutation {
        introduceSession {
          id,
          expiresAt,
          addresses {
            address
          }
        }
      }`;

      try {
        const res = await this.$axios.post("", { query });
        if (res) {
          const introduceSession = res.data.data.introduceSession;
          this.$store.commit("introduceSession", introduceSession);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async checkIfAddressIsValid(address) {
      const query = `query {
        sessions {
          id,
          expiresAt,
          addresses {
            address
          }
        }
      }`;

      try {
        const res = await this.$axios.post("", { query });
        if (res) {
          const addresses = res.data.data.sessions.map(
            (s) => s.addresses[0].address
          );

          return !!addresses.some((a) => a === address);
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    async getMails() {
      const query = `query {
        session(id: "${this.$store.state.id}") {
          mails{
            rawSize,
            fromAddr,
            toAddr,
            downloadUrl,
            text,
            headerSubject
          }
        }
      }`;

      try {
        const res = await this.$axios.post("", { query });
        if (res) {
          const session = res.data.data.session;

          if (session) {
            if (session.mails.length > this.$store.state.mails.length) {
              if (
                document.visibilityState === "hidden" &&
                this.$store.state.notificationPermission
              ) {
                new Notification("You have received a new email.");
              }
            }

            this.$store.commit("setMails", session.mails);
          } else {
            this.$store.commit("clearSession");
            await this.introduceSession();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    checkNotificationPermission() {
      if (Notification.permission === "granted") {
        this.$store.commit("setNotificationPermission", true);
      } else {
        this.$store.commit("setNotificationPermission", false);
      }
    },

    setCheckInboxInterval() {
      this.checkInboxInterval = setInterval(() => {
        this.seconds--;
        if (this.seconds < 1) {
          this.refresh();
        }
      }, 1000);
    },

    async refresh() {
      this.seconds = 15;
      await this.getMails();
    },
  },
};
</script>
