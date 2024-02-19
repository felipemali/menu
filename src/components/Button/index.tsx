import { useContext, useState } from "react";

import {
  Backdrop,
  Box,
  CircularProgress,
  Stack,
  Button as ButtonMui,
} from "@mui/material";

import { MenuContext } from "../../context/MenuContext";
import { handleClickSnack } from "../../hooks/handleClickSnack";
import { css } from "./css";
import { Label } from "../../models/Label";
import { TableBar } from "@mui/icons-material";

const Button = ({ setValueLabel, table }: Label) => {
  const { setSnack, setOrder, setOrderPlaced, order, orderPlaced } =
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
  return (
    <Box display="flex" alignItems="center">
      <Box display="block" m="1rem auto 0 0">
        <Stack spacing={2} width="100%" ml={1}>
          <ButtonMui
            onClick={() => {
              setOrderPlaced(
                order.length > 0
                  ? [
                      ...order,
                      {
                        table: table,
                        name: "",
                        img: "",
                        price: 0,
                        item: "",
                        id: 0,
                        qty: 0,
                      },
                    ]
                  : orderPlaced
              );
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
                order.length > 0 ? setValueLabel("3") : setValueLabel("1");
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
        </Stack>
      </Box>
    </Box>
  );
};
export default Button;
