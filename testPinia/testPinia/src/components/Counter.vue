<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
const props = defineProps(['count'])
const count = props.count

function Increment() {
    store.count++;
}
function decrement() {
    store.count--;
}
</script>

<template>
    <div>
        <button @click="Increment">+</button>
        Count Value : {{store.count}}
        <button @click="decrement">-</button>
    </div>
</template>
<!-- 
export default{
    props:["count"],
    setup(props) {
        console.log(props.count);
    },
} -->