import { createContext, useEffect, useState, ReactNode } from "react";

// import foodsData from "../helpers/foods";
import { foodss } from "../helpers/foods";

import { drinkss } from "../helpers/drinks";
import { Food } from "../models/Food";
import { Drink } from "../models/Drink";
import { SnackProps } from "../models/Snack";
import { Order } from "../models/Order";

export type OrderItem = {
  name: string;
  img: string;
  price: number;
  item: string;
  id: number;
  qty: number;
};
export type OrderGroup = {
  items: OrderItem[];
  table?: string;
  totalPrice?: number;
};
export type OrdersPlaced = OrderGroup[];

type MenuContextType = {
  foods: Food[];
  drinks: Drink[];
  setFoods: React.Dispatch<React.SetStateAction<Food[]>>;
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>;
  snack: SnackProps;
  setSnack: React.Dispatch<React.SetStateAction<SnackProps>>;
  order: Order[];
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
  ordersPlaced: OrdersPlaced;
  setOrdersPlaced: React.Dispatch<React.SetStateAction<OrdersPlaced>>;
};

const initialValue: MenuContextType = {
  foods: [],
  drinks: [],
  setFoods: () => {},
  setDrinks: () => {},
  snack: {
    status: false,
    description: "",
    severity: undefined,
  },
  setSnack: () => {},
  order: [],
  setOrder: () => {},
  ordersPlaced: [],
  setOrdersPlaced: () => {},
};

export const MenuContext = createContext<MenuContextType>(initialValue);

type Props = {
  children: ReactNode;
};

export const MenuContextProvider = ({ children }: Props) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [snack, setSnack] = useState<SnackProps>({
    status: false,
    description: "",
    severity: undefined,
  });
  const [order, setOrder] = useState<Order[]>([]);
  const [ordersPlaced, setOrdersPlaced] = useState<OrdersPlaced>([]);

  useEffect(() => {
    const fetchFoods = () => setFoods(foodss as Food[]);
    const fetchDrinks = () => setDrinks(drinkss as Drink[]);
    fetchFoods();
    fetchDrinks();
  }, []);

  // console.log("orderPlaced", ordersPlaced);
  // console.log("order", order);

  return (
    <MenuContext.Provider
      value={{
        foods,
        drinks,
        snack,
        order,
        ordersPlaced,
        setFoods,
        setDrinks,
        setSnack,
        setOrder,
        setOrdersPlaced,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
