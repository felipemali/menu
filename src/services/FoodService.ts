import axios from "axios";
import { useEffect, useState } from "react";
import { Food } from "../models/Food";

export const FoodService = () => {
  const [foods, setFoods] = useState<Food[]>();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("../helpers/foods.json");
        console.log(response);
        setFoods(response.data);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchFood();
  }, []);

  return foods;
};
