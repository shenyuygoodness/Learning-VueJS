<script setup>
    import { defineProps } from 'vue';

    const {questionStatus, barPercentage} = defineProps(["questionStatus", "barPercentage"])
</script>

<template>
    <div>
        <header>
            <h4> Quetions {{questionStatus}}</h4>
            <div class="bar">
                <div class="completion" :style="{width:barPercentage}"></div>
            </div>
            
        </header> 
    </div>
</template>
<style scoped>
header {
        margin-top: 20px;
    }
    h4{
        font-size: 30px;
    }
    .bar{
        width: 300px;
        height: 50px;
        border: 3px solid bisque;
    }
    .completion{
        height: 100%;
        width: 0%;
        background-color: rgb(204, 134, 47);
    }
</style>