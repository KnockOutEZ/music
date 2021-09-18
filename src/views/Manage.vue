<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <Upload :addSong = "addSong"/>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <div class="text-white text-center font-bold p-4 mb-4" v-show="show_message"
                :class="show_alert_variant">
                  {{show_alert_message}}
                </div>
            <CompositionItems v-for="(song,i) in songs" :key="song.docID" :song='song'
            :updateSong="updateSong" :index="i" :removeSong="removeSong"
            :updateUnsavedFlag ="updateUnsavedFlag" :show_message="show_message"
            :show_alert_message="show_alert_message" :show_alert_variant="show_alert_variant"
            :deletePrompt="deletePrompt" :deleteFailureMsg="deleteFailureMsg"
            :deleteSuccessMsg="deleteSuccessMsg" :hideMsg="hideMsg"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from '@/store/index';
import { songsCollection, auth } from '@/includes/firebase';
import Upload from '../components/Manage/Upload.vue';
import CompositionItems from '../components/Manage/CompositionItems.vue';

export default {
  name: 'Manage',
  data() {
    return {
      songs: [],
      unsavedFlag: false,
      show_message: false,
      show_alert_message: 'Please wait!We are trying to delete your song!',
      show_alert_variant: 'bg-blue-500',
    };
  },
  components: {
    Upload, CompositionItems,
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get();
    snapshot.forEach(this.addSong);
  },

  beforeRouteEnter(to, from, next) {
    if (store.state.isLoggedIn) {
      next();
    } else {
      next({ path: 'Home' });
    }
  },

  methods: {
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name;
      this.songs[i].genre = values.genre;
    },

    removeSong(i) {
      this.songs.splice(i, 1);
    },
    addSong(document) {
      const song = {
        ...document.data(),
        docID: document.id,
      };

      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },

    deletePrompt() {
      this.show_message = true;
      this.show_alert_message = 'Please wait! We are trying to delete your song!';
      this.show_alert_variant = 'bg-blue-500';
    },

    deleteFailureMsg() {
      this.show_alert_message = 'Failure';
      this.show_alert_variant = 'bg-red-500';
    },

    deleteSuccessMsg() {
      this.show_alert_message = 'Success!';
      this.show_alert_variant = 'bg-green-500';
    },

    hideMsg() {
      this.show_message = false;
    },
  },

  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next();
    } else {
      const leave = window.confirm('You have unsaved changes.Are you sure  you want to leave?');
      next(leave);
    }
  },
};
</script>
