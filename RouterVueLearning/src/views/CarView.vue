<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import cars from "../data/cars.json"


const route = useRoute()
const router = useRouter()


const carId  = parseInt(route.params.id)

const car = cars.find(c => c.id === carId)

const showContact = () =>{
    if(carId === 4) return;
    return router.push(`/cars/${carId}/contact`)
}

</script>


<template>
<div v-if="car">
    <h1>Car View</h1>
    <p>Name: {{car.name}}</p>
    <p>Year: {{car.year}}</p>
    <p>Price: {{car.price}}</p>
    <button @click="showContact">Click for contact</button>
    <RouterView />
</div>
<div v-else>
    <h2>Car not found</h2>
</div>

</template>