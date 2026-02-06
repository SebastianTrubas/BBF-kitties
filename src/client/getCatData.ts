// ----- Layouts -----
type dataLayout = {
    id: number;
    name: string;
    age: number;
    skill: string;
    skillInfo: string;
    specialATK: string;
    hobby: string;
    snack: string;
    imageUrl: string;
};

type videoLayout = {
    name: string;
    videoUrl: string[];
};

// ----- Get From Local Storage -----
const raw = localStorage.getItem("cats");

const storedData = raw ? JSON.parse(raw) : {};

// ----- Export Data ----
export const images = storedData.images ?? [];

export const profileData: dataLayout[] = storedData.cats ?? [];

export const videos: videoLayout[] = storedData.videos ?? [];