<template>
  <!-- Auth Modal -->
  <!-- use :class="{hidden: !modal}" to call alias -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
  :class="{hidden: !authModalShow}">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click="toggleAuthModal">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition" href="#"
              :class="{'hover:text-white text-white bg-blue-600': tab === 'login',
              'hover:text-blue-600': tab ==='registration'}"
              @click.prevent="tab = 'login'">Login</a>
            </li>
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition" href="#"
              :class="{'hover:text-white text-white bg-blue-600' :tab === 'registration',
              'hover:text-blue-600' :tab=== 'login'}"
              @click.prevent="tab = 'registration'">Register</a>
            </li>
          </ul>
          <div v-show="tab === 'login'">
          <Login/>
          </div>
          <div v-show="tab === 'registration'">
            <Registration/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// we need to use import { mapGetters } from 'vuex';
import { mapMutations, mapState } from 'vuex';
import Login from './AuthFiles/Login.vue';
import Registration from './AuthFiles/Registration.vue';

export default {
  name: 'Auth',
  data() {
    return {
      tab: 'login',
    };
  },
  components: {
    Login,
    Registration,
  },
  computed: {
    // we can call state directly by mapping state
    ...mapState(['authModalShow']),

    // Using alias
    // ...mapState({
    //   modal: 'authModalShow',
    // }),

    // returning getter with mapper
    // ...mapGetters(['authModalShow']),

    // returning getters
    // authModalShow() {
    //   return this.$store.getters.authModalShow;
    // },
  },

  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>

<style>

</style>
