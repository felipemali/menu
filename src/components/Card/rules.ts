import { Food } from "../../models/Food";
import { Drink } from "../../models/Drink";
import { Order } from "../../models/Order";

export const rulesData = (
  items: Food | Drink,
  setOrder: any,
  order: Order[]
) => {
  const { id } = items;
  const itemIndex = order.findIndex((e) => e.id === id);

  if (itemIndex !== -1) {
    const updatedOrder = [...order];
    updatedOrder[itemIndex] = {
      ...updatedOrder[itemIndex],
      qty: updatedOrder[itemIndex].qty + 1,
    };

    setOrder(updatedOrder);
  } else {
    setOrder((oldData: Order[]) => [...oldData, items]);
  }
};
