<script setup lang="ts">
import Button from "./button-component.vue"
import buttonBar from "./button-bar.vue";
import { ref } from 'vue'
import { images } from "../client/getCatData";

const props = defineProps<{
    currentColorClass: String
}>();

// -------- Cat Images & Image Fading --------
let imageIndex = ref(0);
const isFading = ref(false);
let imageUrl = ref(images[0]);
let noImages = ref(false);

if (!images.length) {
    noImages.value = true;
}

function setNextImage() {
    isFading.value = true;
    imageIndex.value = (imageIndex.value + 1) % images.length;

    setTimeout(() => {
        imageUrl.value = images[imageIndex.value];
        isFading.value = false;
    }, 500)
}

// ------- To Cats Page -------
const emit = defineEmits(['changeComponent', 'currentColorClass', 'changeTheme']);

function changeComponent() {
    emit('currentColorClass', props.currentColorClass);
    emit('changeComponent', 'catsPage');
}

function changeTheme() {
    emit('changeTheme')
}
</script>

<template>
    <div class="mainDiv">

        <h1 class="homeTitle title">
            The Felines Of The Barnacle BattleFront
        </h1>

        <div class="imageBox">
            <div class="imageScreen" v-if="!noImages">
                <img :src="imageUrl" :alt="imageUrl" :class="{ fadeImage: isFading }" />
            </div>
            <div class="error" v-if="noImages">
                <h2>
                    We are terribly sorry but we couldnt fetch the images.
                    Please try again at a later time ♥
                </h2>
            </div>
        </div>

        <buttonBar>
            <template #left>
                <Button :buttonclicked="changeTheme" :text="'Change Theme'" :class="currentColorClass">
                </Button>
            </template>
            <template #center>
                <Button :buttonclicked="changeComponent" :text="'Inspect Warriors'" :class="currentColorClass">
                </Button>
            </template>
            <template #right v-if="!noImages">
                <Button :buttonclicked="setNextImage" :text="'Next Image'" :class="currentColorClass">
                </Button>
            </template>
        </buttonBar>
    </div>
</template>