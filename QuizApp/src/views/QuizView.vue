<script setup>
    import Question from "../component/Question.vue"
    import QuizHeader from "../component/QuizHeader.vue";
    import {useRoute} from "vue-router"
    import {ref, watch, computed} from "vue"
    import quizes from "../data/quiz.json"
    import Result from "../component/Result.vue"
    
    const route = useRoute()
    const quizId = parseInt(route.params.id)
    

    const quiz = quizes.find(q => q.id === quizId)
    
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers= ref(0)
    const showResults = ref(false)

    // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)
    // watch( () => currentQuestionIndex.value, () => {
    //     if(currentQuestionIndex.value <= (quiz.questions.length)-1){
    //     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`}
    // })
    const questionStatus = computed(() => {
        return `${currentQuestionIndex.value}/${quiz.questions.length}`
    })
    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
    const onOptionSelected = (isCorrect) => {
        if(isCorrect){
            numberOfCorrectAnswers.value++;
        }

        if(quiz.questions.length-1 === currentQuestionIndex.value){
            showResults.value = true
        }
        currentQuestionIndex.value++
    }

</script>
<template>
    <div>
        {{barPercentage}}
       <QuizHeader  :questionStatus = "questionStatus" :barPercentage="barPercentage"/>
        <div>
            <Question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestionIndex]"
            @selectOption="onOptionSelected"/>
            <Result 
            v-else
            :quizQuestionLength="quiz.questions.length"
            :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
        
    </div>
</template>
<style scoped>
    

    
</style>