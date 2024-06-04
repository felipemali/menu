import { useContext, useState } from "react";

import {
  Backdrop,
  Box,
  CircularProgress,
  Stack,
  Button as ButtonMui,
} from "@mui/material";

import { MenuContext, OrderGroup, OrderItem } from "../../context/MenuContext";
import { handleClickSnack } from "../../hooks/handleClickSnack";
import { css } from "./css";
import { Label } from "../../models/Label";
import { Order } from "../../models/Order";

const Button = ({ setValueLabel, table, totalPricee }: Label) => {
  const { setSnack, setOrder, setOrdersPlaced, ordersPlaced, order } =
    useContext(MenuContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setTimeout(() => {
      setOpen(false);
    }, 1200);
    setOpen(true);
  };

  const addOrder = (
    order: OrderItem[],
    table: string | undefined,
    totalPricee: number | undefined
  ) => {
    const newOrderGroup: OrderGroup = {
      items: order,
      table: table,
      totalPrice: totalPricee,
    };

    const orderExist: OrderGroup | undefined = ordersPlaced.find(
      (order) => order.table === table
    );
    console.log(orderExist);
    if (orderExist) {
      // const newOrder = [...orderExist.items, newOrderGroup];
      const newOrder = orderExist.items.push(...order);

      console.log(newOrder);

      // setOrdersPlaced((prevOrderPlaced: any) => [...prevOrderPlaced, newOrder]);
    } else {
      setOrdersPlaced((prevOrderPlaced: any) => [
        ...prevOrderPlaced,
        newOrderGroup,
      ]);
    }
  };

  // console.log("orderWithProperties", newOrderGroup);

  return (
    <Box display="flex" alignItems="center">
      <Box display="block" m="1rem auto 0 0">
        <Stack spacing={2} width="100%" ml={1}>
          {order.length > 0 && (
            <ButtonMui
              onClick={() => {
                addOrder(order, table, totalPricee);
                handleClickSnack(
                  order.length > 0
                    ? {
                        text: "Pedido enviado",
                        setSnack,
                        open,
                        setOrder,
                        severity: "success",
                      }
                    : {
                        text: "Lista vazia",
                        setSnack,
                        open,
                        setOrder,
                        severity: "error",
                      }
                );
                handleOpen();
                setTimeout(() => {
                  setValueLabel("3");
                }, 1300);
              }}
              variant="contained"
              sx={css.button}
            >
              <Backdrop
                color="#fff"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              Finalizar Pedido
            </ButtonMui>
          )}
        </Stack>
      </Box>
    </Box>
  );
};
export default Button;
