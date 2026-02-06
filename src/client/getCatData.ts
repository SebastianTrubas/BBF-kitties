import catsData from '../assets/Cats.json'

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

// ----- Get From Json File -----
const storedData = catsData;

// ----- Export Data ----
export const images = storedData.images ?? [];

export const profileData: dataLayout[] = storedData.cats ?? [];

export const videos: videoLayout[] = storedData.videos ?? [];