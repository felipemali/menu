import { memo, useContext } from "react";

import { Button, Stack, Typography, Box } from "@mui/material";

import SimpleSnackbar from "../SimpleSnackbar";
import { Food } from "../../models/Food";
import { Drink } from "../../models/Drink";
import { MenuContext } from "../../context/MenuContext";
import { handleClickSnack } from "../../hooks/handleClickSnack";
import { rulesData } from "./rules";
import { css } from "./css";

type CardProps = {
  items: Food | Drink;
  idItems: number;
};

const Card = memo(({ items, idItems }: CardProps) => {
  console.log("componente renderizado");

  const { name, price, img } = items;
  const { snack, setSnack, order, setOrder } = useContext(MenuContext);

  return (
    <Box key={idItems} sx={css.box}>
      <Typography
        component="div"
        variant="h5"
        textAlign="left"
        padding="0.6rem"
        align="center"
        color="#dad6d6"
      >
        {name}
      </Typography>
      <Box display="flex">
        <img style={css.img} src={img} alt="Hamburguer" />

        <Box>
          <Typography
            color="#fff"
            fontSize="1.4rem"
            component="span"
            variant="body1"
          >
            R$
          </Typography>
          <Typography sx={css.typoPrice} component="span">
            {price}
          </Typography>
          <Stack spacing={2} width={140} ml={4}>
            <Box mb={2}></Box>
            <Button
              onClick={() => {
                handleClickSnack({
                  text: "Adicionado há pedidos",
                  setSnack,
                  openn: true,
                  setOrder,
                  severity: "success",
                });
                rulesData(items, setOrder, order);
              }}
              disableRipple={true}
              sx={css.button}
            >
              Adicionar
            </Button>
            <SimpleSnackbar
              status={snack.status}
              description={snack.description}
              severity={snack.severity}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
});
export default Card;
