import { useContext, useState } from "react";
import Button from "../Button";
import { useOrderResume } from "../../hooks/useOrderResume";
import { MenuContext } from "../../context/MenuContext";
import SimpleSelect from "../SimpleSelect";
import Lanche from "../../assets/img/lanche.png";

import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Badge, Box, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Delete, ShoppingCart } from "@mui/icons-material/";

import { Puller, Root, StyledBox } from "./styles";

const drawerBleeding = 56;

interface Props {
  setValueLabel: (value: string) => void;
}

const PlaceOrder = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { order, setOrder } = useContext(MenuContext);
  const [table, setTable] = useState("");
  const totalPrice = useOrderResume(order);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleToggle = (value: number) => () => {
    const exclued = order.filter((id) => id.id !== value);
    return setOrder(exclued);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography
            component="div"
            display="flex"
            justifyContent="space-between"
            sx={{ p: 2, color: "text.secondary" }}
          >
            <Badge badgeContent={order.length} color="error">
              <img src={Lanche} width={32} alt="" />
            </Badge>
            <ShoppingCart onClick={() => toggleDrawer(false)} />
            <Typography
              color="green"
              fontSize={18}
              fontFamily="sans-serif"
              fontWeight={600}
            >
              {totalPrice}R$
            </Typography>
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <List
            sx={{
              mb: 3,
              mt: 1,
            }}
          >
            <Box width="90%" margin="auto" pt={1}>
              {order.length > 0 && (
                <Box display="flex" justifyContent="start" mb={2} ml={1}>
                  <SimpleSelect setTable={setTable} table={table} />
                </Box>
              )}
              {order.map((e, i: number) => (
                <ListItem
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                    // background: "#f7f7f7",
                  }}
                  key={i}
                  secondaryAction={
                    <ListItemIcon>
                      {/* <Delete sx={{ pl: 4 }} onClick={handleToggle(e.id)} /> */}
                      <Delete sx={{ ml: 4 }} onClick={handleToggle(e.id)} />
                    </ListItemIcon>
                  }
                  disablePadding
                >
                  <ListItemButton
                    sx={{
                      padding: "0.1rem 0.5rem",
                    }}
                    role={undefined}
                    dense
                  >
                    <ListItemText
                      sx={{
                        size: "2rem",
                        color: "#505050",
                        borderBottom: "1px solid #dad8d8",
                      }}
                      primary={
                        <Typography component="span" fontSize={17}>
                          {e.qty} - {e.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <Button
                setTable={setTable}
                table={table}
                setValueLabel={props.setValueLabel}
              />
            </Box>
          </List>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};
export default PlaceOrder;
