<template>
      <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <!-- using name in route -->
      <router-link :to="{ name:'Home',path:'/' }"
       class="text-white font-bold uppercase text-2xl mr-4" exact-active-class="no-active">
      Music
      </router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!isLoggedIn">
            <a class="px-2 text-white" @click="toggleAuthModal" href="#">
              Login / Register
              </a>
          </li>
          <template v-else>
            <li>
            <router-link class="px-2 text-white" to="/manage">Manage</router-link>
          </li>
          <li @click.prevent="signOut">
            <a class="px-2 text-white" href="#">Logout</a>
          </li>
          </template>
          <li>
            <router-link class="px-2 text-white" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['isLoggedIn']),
  },
  // returning mutation
  methods: {
    // getting data from mutation mapper
    ...mapMutations(['toggleAuthModal']),

    // signing out by using Action mapper
    ...mapActions(['signOut']),

    // does the same thing like above.
    // signout(){
    //   this.$store.dispatch('signout')
    // }

    // getting data from mutations
    // toggleAuthModal() {
    //   this.$store.commit('toggleAuthModal');
    // },

    // getting data without mutation
    // toggleAuthModal(){
    //   this.$store.state.AuthModalShow=!this.$store.state.AuthModalShow
    //   console.log(this.$store.state.AuthModalShow)
    // }
  },
};
</script>
