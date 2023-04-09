<template>
    <div class="calculator">
        <input class="calculatorInput" type="text" value="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: '',
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                operations: ['+', '-', '*', '/']
            }
        }
    }
</script>

<style>
    .calculator {
        @apply bg-slate-600 h-96 w-96 mx-auto my-10
    }

    .calculatorInput {
        @apply w-full h-24 bg-white opacity-25 px-2 float-right focus:outline-none
    }

</style>