import { Box } from "@mui/material/";
import {
  MenuContext,
  OrderGroup,
  OrdersPlaced,
} from "../../context/MenuContext";
import { useContext } from "react";
import SwipeableGroup from "../SwipeableGroup";

const ArccodionOrder = () => {
  const { ordersPlaced, setOrdersPlaced } = useContext(MenuContext);

  const handleFinalize = (orderGroup: OrderGroup) => {
    setOrdersPlaced((prevItems: OrdersPlaced) =>
      prevItems.filter((group) => group !== orderGroup)
    );
  };

  return (
    <Box>
      {ordersPlaced.map((orderGroup, arrayIndex) => (
        <SwipeableGroup
          key={arrayIndex}
          orderGroup={orderGroup}
          onFinalize={handleFinalize}
        />
      ))}
    </Box>
  );
};

export default ArccodionOrder;
