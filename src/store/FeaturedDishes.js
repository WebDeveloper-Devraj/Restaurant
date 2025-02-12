import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import dish1 from "../assets/featured dishes/dish1.png";
import dish2 from "../assets/featured dishes/dish2.png";
import dish3 from "../assets/featured dishes/dish3.png";
import dish4 from "../assets/featured dishes/dish4.png";
import dish5 from "../assets/featured dishes/dish5.png";
import dish6 from "../assets/featured dishes/dish6.png";

const initialState = [
  {
    id: uuidv4(),
    name: "Chilli Chicken",
    description:
      "Spicy and tangy chicken stir-fried with peppers, onions, and a flavorful soy-based sauce.",
    price: 100,
    img: dish1,
  },
  {
    id: uuidv4(),
    name: "Grilled Chicken Salad",
    description: "Fresh greens with perfectly grilled chicken.",
    price: 90,
    img: dish2,
  },
  {
    id: uuidv4(),
    name: "Prawn Fried Rice",
    description:
      "Long-grain rice stir-fried with juicy prawns, eggs, and veggies, seasoned with soy sauce.",
    price: 150,
    img: dish3,
  },
  {
    id: uuidv4(),
    name: "Cheesecake",
    description: "A creamy slice of indulgent cheesecake.",
    price: 80,
    img: dish4,
  },
  {
    id: uuidv4(),
    name: "Hot and Sour Soup",
    description:
      "A tangy and spicy soup made with mixed vegetables and flavorful Asian spices.",
    price: 90,
    img: dish5,
  },
  {
    id: uuidv4(),
    name: "Chilli Paneer",
    description:
      " Soft paneer cubes stir-fried with bell peppers, onions, and spicy sauces, served dry or with gravy.",
    price: 200,
    img: dish6,
  },
];

const featuredDishesSlice = createSlice({
  name: "featuredDishes",
  initialState: initialState,
  reducers: {},
});

export const featuredDishesActions = featuredDishesSlice.actions;
export default featuredDishesSlice;
