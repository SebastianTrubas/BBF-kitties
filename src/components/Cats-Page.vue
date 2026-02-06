<script setup lang="ts">
import Button from "./button-component.vue";
import ButtonBar from "./button-bar.vue";
import { profileData } from "../client/getCatData";
import { ref } from "vue";

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
    emit("changeComponent", "homePage");
}

function changeTheme() {
    emit("changeTheme");
}
function catClipsPage(){
    emit('changeComponent', "catsClipPage");
}
// ----- Cat Profile Data -----
let noData = ref(false);
if (!profileData.length) {
    noData.value = true;
}

</script>
<template>
    <div class="mainDiv">
        <h1 class="title W65Title" v-if="!noData">
            Bow Mortal, For Thou Hast Gazed Upon The Four Kings Of The Barnacle
            BattleFront
        </h1>
        <div class="infoBox" v-if="!noData">
            <div class="detailBox" v-for="cat in profileData" :key="cat.id">
                <div class="imageScreen" id="imageScreenProfile">
                        <img :src="cat.imageUrl" class="profileImg" />
                </div>
                <div class="detailDiv">
                    <ul>
                        <li>
                            <h2 class="profileName">{{ cat.name }}</h2>
                        </li>
                        <li>
                            <h3>Age: &nbsp;{{ cat.age }}</h3>
                        </li>
                        <li>
                            <h3>Skill: &nbsp;{{ cat.skill }}</h3>
                        </li>
                        <li>
                            <h3>Skill Info: &nbsp;{{ cat.skillInfo }}</h3>
                        </li>
                        <li>
                            <h3>SpecialATK: &nbsp;{{ cat.specialATK }}</h3>
                        </li>
                        <li>
                            <h3>Hobby: &nbsp;{{ cat.hobby }}</h3>
                        </li>
                        <li>
                            <h3>Snack: &nbsp;{{ cat.snack }}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="error" v-if="noData">
            <h2>
                We are terribly sorry but we couldnt fetch the data. 
                Please try again at a later time ♥
            </h2>
        </div>
        <ButtonBar>
            <template #left>
                <Button :buttonclicked="changeTheme" :text="'Change Theme'" :class="currentColorClass">
                </Button>
            </template>
            <template #center>
                <Button :buttonclicked="changeComponent" :text="'Return Home'" :class="currentColorClass">
                </Button>
            </template>
            <template #right>
                <Button :buttonclicked="catClipsPage" :text="'Witness Their Hunt'" :class="currentColorClass">
                </Button>
            </template>
        </ButtonBar>
    </div>
</template>
