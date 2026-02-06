<script setup lang="ts">
import { ref, computed } from 'vue';
import ButtonBar from './button-bar.vue';
import Button from './button-component.vue';
import { videos } from '../client/getCatData';

// ------ Props / Emits -----
const emit = defineEmits([
    "changeComponent",
    "currentColorClass",
    "changeTheme",
]);

const props = defineProps<{
    currentColorClass: String;
}>();

// ----- Logic For The Buttons -----
function changeComponent() {
    emit("currentColorClass", props.currentColorClass);
    emit("changeComponent", "catsPage");
}

function changeTheme() {
    emit("changeTheme");
}

// ----- Cat Clips -----
let currentCat = ref('Cheeto');
let catIndex = ref(0);
let videoIndex = ref(0);
const cats = ["Cheeto", "Vincent", "Peter", "Gizmo"];
let noVideos = ref(false);
let isFading = ref(false);

let currentCatVideos = computed(() => {
    const catData = videos.find(cat => cat.name === currentCat.value);
    return catData?.videoUrl || [];
});
if (!videos.length) {
    noVideos.value = true;
}

function switchCat() {
    videoIndex.value = 0;
    catIndex.value = (catIndex.value + 1) % cats.length;
    currentCat.value = cats[catIndex.value];
}

function nextVideo() {
    isFading.value = true
    videoIndex.value = (videoIndex.value + 1) % currentCatVideos.value.length

    setTimeout(() => {
        isFading.value = false
    }, 500)
}

</script>
<template>
    <div class="mainDiv">
        <div class="clipTitles">
            <h1 class="title">Witness The Hunts Of&nbsp;</h1>
            <h1 class="title" v-if="!noVideos">{{ currentCat }}</h1>
        </div>
        <div class="videoBox">
            <h2>Hunt {{ videoIndex + 1 }}/{{ currentCatVideos.length }}</h2>
            <div class="videoScreen">
                <iframe :src="currentCatVideos[videoIndex]" :class="{ fadeVideo: isFading }" frameborder="0"
                    allow="autoplay; encrypted-media;" autoplay></iframe>
            </div>
        </div>

        <div class="error" v-if="noVideos">
            <h2>
                We are terribly sorry but we couldnt fetch the images.
                Please try again at a later time ♥
            </h2>
        </div>
        <ButtonBar>
            <template #left>
                <Button :buttonclicked="changeTheme" :text="'Change Theme'" :class="currentColorClass">
                </Button>
            </template>
            <template #center>
                <Button :buttonclicked="changeComponent" :text="'Return'" :class="currentColorClass">
                </Button>
            </template>
            <template #right>
                <Button :buttonclicked="switchCat" :text="'Switch Warrior'" :class="currentColorClass">
                </Button>
            </template>
            <template #extra>
                <Button :buttonclicked="nextVideo" :text="'Next Video'" :class="currentColorClass">
                </Button>
            </template>
        </ButtonBar>
    </div>
</template>