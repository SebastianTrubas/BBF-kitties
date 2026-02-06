<script setup lang="ts">
const props = defineProps<{
    buttonclicked: () => void,
    text: String
}>()
</script>
<template>
    <button @click="props.buttonclicked">{{ props.text }}</button>
</template>
