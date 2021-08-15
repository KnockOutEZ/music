import { register } from 'register-service-worker';
import { auth, userCollection } from '@/includes/firebase';
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
    isLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      console.log(state.authModalShow);
    },
    toggleLogInState(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  getters: {
    // calling the state
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email, payload.password,
      );
        // set() is for adding new data or editing the data in the document with same uid
      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        password: payload.password,
        age: payload.age,
        country: payload.country,
      });

      // this function will update data in profile like display name and user image.
      // go to firebase user for more info
      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      // add is for adding new adding data to collection with new uid
      // await userCollection.add({
      //   name: payload.name,
      //   password: payload.password,
      //   age: payload.age,
      //   country: payload.country,
      // });

      commit('toggleLogInState');
    },

    async logIn({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit('toggleLogInState');
    },

    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleLogInState');
      }
    },

    async signOut({ commit }) {
      await auth.signOut();

      commit('toggleLogInState');
    },
  },
  modules: {
  },
});
