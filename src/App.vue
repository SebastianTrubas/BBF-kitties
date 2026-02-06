<script setup lang="js">
import HomePage from "./components/home-page.vue";
import CatsPage from "./components/Cats-Page.vue";
import CatClips from "./components/catclip-page.vue";
import { ref, computed } from 'vue'

// ------- Change Components -------
let currentComponent = ref("");
currentComponent.value = "homePage"

function changeComponents(newComponent) {
  currentComponent.value = newComponent;
}

// -------- Change Theme ---------
let color = ref(0);
const colors = ["#0C0C0C", "azure", "#0E0E0E"];

function changeTheme() {
  color.value = (color.value + 1) % colors.length;
  document.body.style.backgroundColor = colors[color.value];
}

const currentColorClass = computed(() => {
  return colors[color.value].replace("#", "hex-");
});
</script>

<template>
  <div class="main">
    <HomePage v-if="currentComponent == 'homePage'" @changeComponent="changeComponents" @changeTheme="changeTheme"
      :currentColorClass="currentColorClass">
    </HomePage>

    <CatsPage v-if="currentComponent == 'catsPage'" @changeComponent="changeComponents" @changeTheme="changeTheme"
      :currentColorClass="currentColorClass">
    </CatsPage>
    <CatClips v-if="currentComponent == 'catsClipPage'" @changeComponent="changeComponents" @changeTheme="changeTheme"
      :currentColorClass="currentColorClass">
    </CatClips>
  </div>
</template>