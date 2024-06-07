import { useContext, useState } from "react";

import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

import Button from "../Button";
import Lanche from "../../assets/img/lanche.png";
import SimpleSelect from "../SimpleSelect";
import { MenuContext } from "../../context/MenuContext";
import { useOrderResume } from "../../hooks/useOrderResume";
import { css } from "./css";

const PlaceOrders = ({
  setValueLabel,
}: {
  setValueLabel: (value: string) => void;
}) => {
  const { order, setOrder } = useContext(MenuContext);
  const [table, setTable] = useState("");

  const handleToggle = (value: number) => () => {
    const exclued = order.filter((id) => id.id !== value);
    return setOrder(exclued);
  };

  const totalPrice = useOrderResume(order);

  return (
    <Box display="flex" justifyContent="space-around" width="100%">
      <Box sx={css.box}>
        {order.map((e, i: number) => (
          <ListItem
            key={i}
            secondaryAction={
              <ListItemIcon>
                <Delete sx={{ pl: 4 }} onClick={handleToggle(e.id)} />
              </ListItemIcon>
            }
            disablePadding
          >
            <ListItemButton
              sx={{
                borderBottom: "1px solid #b6b4b4",
                padding: "0.2rem 0.5rem",
              }}
              role={undefined}
              dense
            >
              <ListItemText
                sx={{ size: "2rem" }}
                primary={
                  <Typography component="span" fontSize={17}>
                    {e.qty} - {e.name}
                    <br />
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemText
          sx={css.list}
          primary={
            <Typography
              component="span"
              variant="inherit"
              fontSize={19}
              color="#353434"
              fontWeight={600}
            >
              {`Total: `}
              <Typography color="#008000" fontSize={19} component="span">
                {`${totalPrice}R$`}
              </Typography>

              <br />
            </Typography>
          }
        />
        <ListItemText
          sx={css.list}
          primary={
            <Typography component="span" variant="inherit" fontSize={17}>
              <SimpleSelect setTable={setTable} table={table} />
            </Typography>
          }
        />
        <Button
          setTable={setTable}
          table={table}
          setValueLabel={setValueLabel}
        />
      </Box>
      <Box mt={2} width={160} component="div">
        <img width={160} height={200} src={Lanche} alt="Hamburguer" />
      </Box>
    </Box>
  );
};
export default PlaceOrders;
