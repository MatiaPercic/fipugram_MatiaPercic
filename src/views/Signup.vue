<template>
 <div class="about">
 <h1>This is a signup page</h1>
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form>
 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
    <input 
    type="email" 
    v-model='username'
    class="form-control"
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Enter
    email" />
 <small id="emailHelp" class="form-text text-muted" >We'll
never share your email with anyone else.</small>
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Password</label>
 <input 
    type="password" 
    v-model='passward' 
    class="form-control"
    id="exampleInputPassword1" 
    placeholder="Password" />
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Repeat password</label>
 <input 
    type="password" 
    v-model='repeatPassward' 
    class="form-control"
    id="exampleInputPassword2" 
    placeholder="Password" />
 </div>
 <button type="button" @click="signup" class="btn btn-primary">Submit</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>


<script>
import firebase from '@/firebase';

export default {
    name: "signup",
    data(){
        return {
            username: "",
            password: '',
            repeatPassword: ''
        };
    },        
    
    methods: {
        signup(){
            //if se password ne slaze, baci alert

         firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
         .then(function() {
                    console.log('uspjesna registracija')
                })
          .catch(function(error){
              	    console.error('greska', error)
                      //dodaj alert korisniku koja greska je dosla 
          }) ;     
         console.log('nastavak');
        },
    },
};
</script>
