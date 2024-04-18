<script setup>
import {ref} from "vue";
const count = ref(0);
</script>
<template>
  <main>
    
    <div>
    <h2>
      The current count is ...
    </h2>
    <h1 >{{ count }}</h1>
    <div class="Btn">
    <button @click ="count--">-</button>
    <button @click="count++">+</button>
  </div>
  </div>
  </main>
</template>

<style scoped>
main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
div {
  background-color: pink;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin: 1px;
  text-align: center;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Btn{
  margin: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 
}
button{
  margin: 0% 5%;
  background-color: rgb(186, 125, 201);
  width: 90%;
  height: 30px;
  border-radius: 3px;
  border: none;
  font-size:x-large;
  font-weight: bold;
  text-align: center;
}

</style>