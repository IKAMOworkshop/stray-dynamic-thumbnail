<template>
    <div>
        <canvas id="webgl"></canvas>

        <div class="title-container">
            <h1 class="title text-light">HOVER PROJECT!</h1>
        </div>

        <div class="button-container flex flex-column">

            <button id="lift-42" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">LIFT FF42</h1>
                <p class="caption-light text-light text-border">@QUARTERLIFT</p>
            </button>

            <button id="aida-102" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">AIDA C102</h1>
                <p class="caption-light text-light text-border">@AIDA0612</p>
            </button>

            <button id="kyaroru-102" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">KYARORU C102</h1>
                <p class="caption-light text-light text-border">@KYARORU0203</p>
            </button>

            <button id="aida-103" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">AIDA C103</h1>
                <p class="caption-light text-light text-border">@AIDA0612</p>
            </button>

            <button id="kyaroru-103" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">KYARORU C103</h1>
                <p class="caption-light text-light text-border">@KYARORU0203</p>
            </button>

            <button id="kyaroru-40" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">KYARORU FF40</h1>
                <p class="caption-light text-light text-border">@KYARORU0203</p>
            </button>

            <button id="lift-41" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">LIFT FF41</h1>
                <p class="caption-light text-light text-border">@QUARTERLIFT</p>
            </button>

            <button id="prisma" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">PRISMA</h1>
                <p class="caption-light text-light text-border">@IKAMOWORKSHOP</p>
            </button>

            <button id="polygon" class="hover-button flex gap-8">
                <h1 class="caption-bold text-light text-border">POLYGON</h1>
                <p class="caption-light text-light text-border">@IKAMOWORKSHOP</p>
            </button>

        </div>
    
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Experience from './Experience/Experience.js'

let currentThumbnail = ref(0)

onMounted(() => {
    const experience = new Experience('webgl' ,currentThumbnail.value)
})
</script>