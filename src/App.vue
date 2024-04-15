<template>
    <div>
        <canvas id="webgl"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Experience from './Experience/Experience.js'

onMounted(() => {
    const experience = new Experience('webgl')
})
</script>