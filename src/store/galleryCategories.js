import { createSlice } from "@reduxjs/toolkit";

// Ambiance & Interiors images imports
import photo1 from "../assets/gallery page/photo1.png";
import fishCurry from "../assets/menu dishes/main course/fishCurry.png";
import chanaMasala from "../assets/menu dishes/main course/chanaMasala.png";
import goanPrawnCurry from "../assets/menu dishes/main course/goanPrawnCurry.png";

// main course dish images imports
import gulabJamun from "../assets/menu dishes/desserts/gulabJamun.png";
import rasMalai from "../assets/menu dishes/desserts/rasMalai.png";
import chocolateBrownie from "../assets/menu dishes/desserts/chocolateBrownie.png";
import iceCreamSundae from "../assets/menu dishes/desserts/iceCreamSundae.png";
import cheesecake from "../assets/menu dishes/desserts/cheesecake.png";
import tiramisu from "../assets/menu dishes/desserts/tiramisu.png";
import kulfi from "../assets/menu dishes/desserts/kulfi.png";

// Beverages dish images imports
import limeSoda from "../assets/menu dishes/beverages/limeSoda.png";
import mangoLassi from "../assets/menu dishes/beverages/mangoLassi.png";
import icedCofee from "../assets/menu dishes/beverages/icedCofee.png";
import masalaChai from "../assets/menu dishes/beverages/masalaChai.png";
import peachIcedTea from "../assets/menu dishes/beverages/peachIcedTea.png";
import hotChocolate from "../assets/menu dishes/beverages/hotChocolate.png";

// Ambiance & Interiors videos imports
import video1 from "../assets/gallery page/video1.mp4";
import video2 from "../assets/gallery page/video2.mp4";
import video3 from "../assets/gallery page/video3.mp4";
import video4 from "../assets/gallery page/video4.mp4";
import video5 from "../assets/gallery page/video5.mp4";
import video6 from "../assets/gallery page/video6.mp4";

const initialState = {
  activeCategory: "Ambiance & Interiors",
  activeSubCategory: "Photos",
  categories: [
    "Ambiance & Interiors",
    "Food & Drinks",
    "Events & Celebrations",
    "Behind the Scenes",
  ],
  subCategories: ["Photos", "Videos"],
  galleryImages: [
    {
      category: "Ambiance & Interiors",
      img: photo1,
    },
    {
      category: "Ambiance & Interiors",
      img: fishCurry,
    },
    {
      category: "Ambiance & Interiors",
      img: chanaMasala,
    },
    {
      category: "Ambiance & Interiors",
      img: goanPrawnCurry,
    },
    {
      category: "Food & Drinks",
      img: gulabJamun,
    },
    {
      category: "Food & Drinks",
      img: rasMalai,
    },
    {
      category: "Food & Drinks",
      img: chocolateBrownie,
    },
    {
      category: "Food & Drinks",
      img: iceCreamSundae,
    },
    {
      category: "Food & Drinks",
      img: cheesecake,
    },
    {
      category: "Events & Celebrations",
      price: "$9",
      img: tiramisu,
    },
    {
      category: "Events & Celebrations",
      price: "$5",
      img: kulfi,
    },
    {
      category: "Events & Celebrations",
      img: limeSoda,
    },
    {
      category: "Events & Celebrations",
      img: mangoLassi,
    },
    {
      category: "Behind the Scenes",
      img: icedCofee,
    },
    {
      category: "Behind the Scenes",
      img: masalaChai,
    },
    {
      category: "Behind the Scenes",
      img: peachIcedTea,
    },
    {
      category: "Behind the Scenes",
      img: hotChocolate,
    },
  ],
  galleryVideos: [
    {
      category: "Ambiance & Interiors",
      src: video1,
    },
    {
      category: "Ambiance & Interiors",
      src: video2,
    },
    {
      category: "Food & Drinks",
      src: video3,
    },
    {
      category: "Food & Drinks",
      src: video4,
    },
    {
      category: "Events & Celebrations",
      src: video5,
    },
    {
      category: "Behind the Scenes",
      src: video6,
    },
  ],
};

const galleryCategoriesSlice = createSlice({
  name: "galleryCategories",
  initialState: initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveSubCategory: (state, action) => {
      state.activeSubCategory = action.payload;
    },
  },
});

export const galleryCategoriesActions = galleryCategoriesSlice.actions;
export default galleryCategoriesSlice;
