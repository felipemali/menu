import { useEffect, useState } from "react";

import { Order } from "../models/Order";

export const useOrderResume = (orderr: Order[]) => {
  const [resume, setResume] = useState<number>(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;
      for (const item of orderr) {
        sum += item.price * item.qty;
      }
      setResume(sum);
    };
    calculateTotalPrice();
  }, [orderr]);

  return resume;
};
