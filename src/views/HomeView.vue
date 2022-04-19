<template>

  <div class="row">
  <div class="col-2"></div>
  <div class="col-7">
    
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
        store
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
