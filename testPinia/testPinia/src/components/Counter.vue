<script setup>
import { computed } from 'vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
const props = defineProps(['count'])
const count = props.count

// const countDigitLength = computed(() => store.count.toString().length)
</script>

<template>
    <div>
        <button @click="store.increment">+</button>
        Count Value : {{store.count}}
        <button @click="store.decrement">-</button>

        <br />
        Counter moved to {{store.countDigitLength}} Length
    </div>
</template>
<!-- 
export default{
    props:["count"],
    setup(props) {
        console.log(props.count);
    },
} -->