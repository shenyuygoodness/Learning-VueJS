<script setup>
    import {defineProps, defineEmits} from "vue"

    const {question} = defineProps(['question']) 

    const emit = defineEmits(['selectOption'])
    const emitSelectedOption = (isCorrect) => {
        emit("selectOption", isCorrect)
    }
</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">
                {{question.text}}
            </h1>
        </div>
        <div class="options-container">
            <div v-for="option in question.options" :key="option.id" class="option">
                <p class="option-label"
               @click="emitSelectedOption(option.isCorrect)" >
                {{option.label}}
            </p>
            
            <div class="option-value">
                <p>{{option.text}}</p>
            </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .question-container{
        margin-top:20px;
    }
    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }
    .option{
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .option-label{
        background-color: bisque;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
    }
    .option-value{
        background-color: rgb(244, 239, 239);
        width: 80%;
        font-size: 30px;
        padding-left: 20px; 
        color: black;
    }

</style>