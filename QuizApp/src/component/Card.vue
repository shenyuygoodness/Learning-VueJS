<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const {quiz} = defineProps(['quiz'])

  const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`)
  }
</script>
<template>
    <div class="options-container" @click="navigateToQuiz">
      <div class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{quiz.questions.length}} questions</p>
        </div>
      </div>
      </div>
</template>
<style scoped>
img{
  width: 30px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 5px;
  cursor: pointer;
}
.card{
    background-color: rgb(12, 12, 18);
    border-radius: 10px;
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