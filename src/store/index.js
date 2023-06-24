import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state() {
    return {
      id: null,
      addresses: [],
      expiresAt: null,
      mails: [],
      selectedMail: null,
      notificationPermission: false,
    };
  },

  getters: {
    getAddress(state) {
      return state.addresses[0]?.address || null;
    },
  },

  mutations: {
    introduceSession(state, data) {
      state.id = data.id;
      state.addresses = data.addresses;
      state.expiresAt = data.expiresAt;
    },

    setMails(state, data) {
      state.mails = data;
    },

    setSelectedMail(state, data) {
      state.selectedMail = data;
    },

    setNotificationPermission(state, data) {
      state.notificationPermission = data;
    },

    clearSession(state) {
      state.id = null;
      state.addresses = [];
      state.expiresAt = null;
      state.mails = [];
      state.selectedMail = null;
    },
  },

  plugins: [vuexLocal.plugin],
});
