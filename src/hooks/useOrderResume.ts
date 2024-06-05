import { useEffect, useState } from "react";
import { Order } from "../models/Order";
import { OrderGroup } from "../context/MenuContext";

type UseOrderResumeInput = Order[] | OrderGroup[];

const isOrderArray = (input: UseOrderResumeInput): input is Order[] => {
  return (input as Order[]).every(
    (item) => (item as Order).price !== undefined
  );
};

const useOrderResume = (input: UseOrderResumeInput) => {
  const [resume, setResume] = useState<number>(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;

      if (isOrderArray(input)) {
        // Calcula o totalPrice para Order[]
        sum = input.reduce((total, item) => total + item.price * item.qty, 0);
      } else {
        // Calcula o totalPrice para OrderGroup[]
        sum = input.reduce(
          (total, group) => total + (group.totalPrice || 0),
          0
        );
      }

      setResume(sum);
    };

    calculateTotalPrice();
  }, [input]);

  return resume;
};

export { useOrderResume };
export type { Order, OrderGroup };
