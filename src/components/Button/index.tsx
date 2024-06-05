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
import { useOrderResume } from "../../hooks/useOrderResume";

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
      totalPrice: 0,
    };

    // Verificar se já existe uma ordem com a mesma mesa
    const existingOrderGroupIndex = ordersPlaced.findIndex(
      (orderGroup) => orderGroup.table === table
    );

    if (existingOrderGroupIndex !== -1) {
      // Ordem existente encontrada
      const existingOrderGroup = ordersPlaced[existingOrderGroupIndex];

      order.forEach((newItem) => {
        const existingItem = existingOrderGroup.items.find(
          (item) => item.id === newItem.id
        );

        if (existingItem) {
          // Incrementar a quantidade do item existente
          existingItem.qty += newItem.qty;
        } else {
          // Adicionar novo item à ordem existente
          existingOrderGroup.items.push(newItem);
        }
      });
      // Recalcular o totalPrice da ordem existente
      existingOrderGroup.totalPrice = existingOrderGroup.items.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );

      // Atualizar o estado com a ordem modificada
      setOrdersPlaced((prevOrdersPlaced) => {
        const updatedOrdersPlaced = [...prevOrdersPlaced];
        updatedOrdersPlaced[existingOrderGroupIndex] = existingOrderGroup;
        return updatedOrdersPlaced;
      });
    } else {
      // Calcular o totalPrice para a nova ordem
      newOrderGroup.totalPrice = order.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );

      // Não existe uma ordem com a mesma mesa, adicionar uma nova
      setOrdersPlaced((prevOrdersPlaced) => [
        ...prevOrdersPlaced,
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
