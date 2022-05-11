<template>

  <div class="row">
  <div class="col-2"></div>
  <div class="col-7">
    
    <form @submit.prevent="postNewImage" class="form-inline mb-5">
       <div class="form-group">
          <label for="imageUrl">Image URL</label>
            <input
              v-model="newImageUrl"
              type="text"
              class="form-control ml-2"
              placeholder="Enter the image URL"
              id="imageUrl"
            />
        </div>

      <div class="form-group">
        <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
            />
        </div>

    <button type="submit" class="btn btn-primary ml-2">Post
        image</button>
    </form>

    <instagram-card v-for="card in filteredCards" :key="card.url" :info="card"/>

  </div>
  <div class="col-3">
       
    Sidebar
      
    <div class="card-body p-0">

    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'
import store from '@/store'
import {db, storage} from '@/firebase'
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

let cards= []
//... API/firebase/neki drugi server-> sve kartice --> cards

cards =[
  {'url': "https://picsum.photos/id/29/400/400", description: 'mountain', time: 'few  seconds ago...'},
  {'url': "https://picsum.photos/id/42/400/400", description: 'coffee', time: 'few  minutes ago...'},
  {'url': "https://picsum.photos/id/55/400/400", description: 'plant', time: 'hour ago...'},
  {'url': "https://picsum.photos/id/420/400/400", description: 'city', time: 'few  hours ago...'}
]

export default {
  name: 'HomeView',
  data: function (){
      return{
        //ključ: vrijednost

        cards,
        store,
        newImageDesc: "",
        newImageUrl: ""
      }
  },

  methods: {
   async postNewImage(){
      try{

      let imageName =
          "posts/" + store.currentUser + "/" + Date.now() + ".png";

        const storageRef = ref(storage, imageName);
        await uploadBytes(storageRef, this.imageReference);
        const url = await getDownloadURL(storageRef);
       
       const imageDescription = this.newImageDesc;

       const docRef = addDoc(collection(db, "posts"), {
          url: url,
          desc: imageDescription,
          user: store.currentUser,
          posted_at: Date.now(),
       }) 
      }
       catch(e)  {
            console.error(e)
       }
      
      }

  },

  computed: {
      filteredCards() {
        //kako se filtrira
        let termin=this.store.searchTerm;
        let newCards= []

        for (let card of this.cards){
          if (card.description.indexOf(termin) >=0) {
              newCards.push(card)
          }
        }
        return newCards;
      }
  },
  components: {
    InstagramCard
  }
}
</script>
