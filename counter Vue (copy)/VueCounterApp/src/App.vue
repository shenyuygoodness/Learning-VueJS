<!-- <script>
  export default{
    data(){
      return{
        title: "Hey Vue3",
        face: "<button>Class</button>",
        isSeeking: false,
        count: 0,
      };
    },
    mounted(){
      setInterval(() => {
        this.count++;
      }, 1000);
    },
  }

</script>


<template>
  <p v-if="isSeeking">{{title}}</p>
  <p v-else-if="isSeeking===null" v-html="face"></p>
  <h1 v-else >Hello there</h1>
  <h2 v-show="isSeeking">{{count}}</h2>
  <h3 v-once v-text="count"></h3>
</template> -->

<!-- Below code in Option API -->
<template>
  <h1>Dc Heroes {{heroesCount()}}</h1>
  <!-- <h2>{{fname}} {{lname}}</h2>
  <p>{{randC()}}</p> -->
  <ul>
    <li v-for="(hero, index) in dcHeroes" v-bind:key="index">
      <div>{{hero.name}} <button @click="remove(index)">x</button></div>
    </li>
  </ul>
  <form @submit.prevent="addHero">
    <input v-model.trim.number="newHero" placeholder="Type super hero Here"/>
    <button type="submit">Add Hero</button>
  </form>
</template>
<script>
import { remove } from '@vue/shared';

  export default{
    methods:{
      addHero() {
        if(this.newHero !== ""){
        this.dcHeroes.push({name: this.newHero}); 
  this.newHero='';
      }
    },
    remove(index){
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i !==index)
    },
    heroesCount (){
      return this.dcHeroes.length
    },
    randC(){ //sey this one na property
        return Math.random();
    }
    },  

    data(){
      return{
        fname: "Sam",
        lname: "John",
        newHero: "",
        dcHeroes: [
          {name:"SuperGirl"}, 
          {name:"Flash"}, 
          {name:"Batman"}, 
          {name:"Arrow"}, 
          {name:"SuperMan"},
      ],
    }
  }
}
</script>

<!-- Below code using composible API -->
<!-- <script setup>
  import heroes from "./data/heroes.json"
  import {ref, computed} from "vue"
  


  const Heroes = ref(heroes)
  // const heroesCount = function(){
  //   return Heroes.value.length
  // }
  const heroesCount = computed(() =>{
      return Heroes.value.length
  })

  const newHero = ref("")
  const addHero =() => {
    if(newHero.value !== ""){
      Heroes.value.push({ 
        id: Heroes.value.length + 1,
        name: newHero.value})
    }
    console.log(Heroes.value)
  }


  
</script>
<template>
  <h1>Dc Heroes {{heroesCount}}</h1>
  <ul>
    <li v-for="hero in Heroes" :key="id">{{hero.name}}</li>
  </ul>
  <form @submit.prevent="addHero">
    <input v-model.trim.number="newHero" placeholder="Type super hero Here"/>
    <button type="submit">Add Hero</button>
  </form>
</template> -->

