<template>

  <div class="row">
  <div class="col-2"></div>
  <div class="col-7">
    
    <instagram-card v-for="card in cards" :key="card" :info="card"/>

  </div>
  <div class="col-3">
    Sidebar  
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'

let cards= []
//... API/firebase/neki drugi server-> sve kartice --> cards

cards =[
  "https://picsum.photos/id/29/400/400",
  "https://picsum.photos/id/42/400/400",
  "https://picsum.photos/id/55/400/400",
  "https://picsum.photos/id/420/400/400",
]

export default {
  name: 'HomeView',
  data: function (){
      return{
        //ključ: vrijednost

        cards: cards
      }
  },
  components: {
    InstagramCard
  }
}
</script>
