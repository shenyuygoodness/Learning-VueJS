<script setup>
import { ref, watch} from 'vue';
import q from "../data/quiz.json"
import card from "../component/Card.vue"

const quizes = ref(q)
const search = ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>
<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span style="color:red" v-html="rawHtml"></span></p>

  <div >
    <header>
      <h1>Quizes </h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <card v-for="quiz in quizes" :key="quiz.id" :quiz ="quiz"/>
    <!-- <div class="options-container">
      <div v-for ="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{quiz.questions.length}} questions</p>
        </div>
      </div>
    </div> -->

  </div>
</template>

<style scoped>

header{
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

header h1{
  font-weight: bold;
  margin-right: 30px;
}
header input{
  border: none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
}
.options-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
/*CARD*/
img{
  width: 30px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 5px;
  cursor: pointer;
}

.card img{
  width: 200px;
  height: 190px;
  margin: 5px;
}

.card .card-text{
  padding: 0 5px;
}
.card .card-text h2{
  font-weight: bold;
}
</style>