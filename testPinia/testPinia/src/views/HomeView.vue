<script setup>
import Counter from "@/components/Counter.vue"
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
const {isAuthenticated, user} = storeToRefs(authStore)
</script>
<template>
    <div class="container">
        <p>Hello everyone welcome</p>
        <div v-if = "authStore.isAuthenticated">User name is : {{authStore.user.name}}</div>
        <Counter />
        
    </div>
</template>