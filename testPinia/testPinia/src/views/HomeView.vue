<script setup>
    import { useCounterStore } from '@/stores/counter';

    const store = useCounterStore()
    console.log(store)
</script>
<template>
    <div class="container">
        <p>Hello everyone welcome</p>
    </div>
</template>