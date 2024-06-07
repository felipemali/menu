import { Box } from "@mui/material/";
import {
  MenuContext,
  OrderGroup,
  OrdersPlaced,
} from "../../context/MenuContext";
import { useContext } from "react";
import SwipeableGroup from "../SwipeableGroup";
import { handleClickSnack } from "../../hooks/handleClickSnack";
import SimpleSnackbar from "../SimpleSnackbar";

const ArccodionOrder = () => {
  const { ordersPlaced, snack, setOrdersPlaced, setSnack, setOrder } =
    useContext(MenuContext);

  const handleFinalize = (orderGroup: OrderGroup) => {
    setOrdersPlaced((prevItems: OrdersPlaced) =>
      prevItems.filter((group) => group !== orderGroup)
    );
    handleClickSnack({
      text: "Comanda finalizada com Sucesso",
      setSnack,
      openn: true,
      setOrder,
      severity: "success",
    });
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
      {snack.status && (
        <SimpleSnackbar
          status={snack.status}
          description={snack.description}
          severity={snack.severity}
        />
      )}
    </Box>
  );
};

export default ArccodionOrder;
