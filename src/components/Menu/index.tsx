import { useContext } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Typography, Tab } from "@mui/material";
import Badge from "@mui/material/Badge";

import Card from "../Card";
import { Food } from "../../models/Food";
import { MenuContext } from "../../context/MenuContext";
import { Drink } from "../../models/Drink";
import { css } from "./css";
import ArccodionOrder from "../Accordion";
import { Label } from "../../models/Label";

const Menu = ({ valueLabel, setValueLabel }: Label) => {
  const { foods, drinks, ordersPlaced } = useContext(MenuContext);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValueLabel(newValue);
  };
  const label = [
    { description: "Lanches", value: "1" },
    { description: "Bebidas", value: "2" },
    { description: "Seu Pedido", value: "3" },
  ];
  return (
    <Box sx={css.box}>
      <TabContext value={valueLabel === undefined ? "1" : valueLabel}>
        <Box borderBottom={1} borderColor="divider">
          <TabList
            sx={{ ml: 5 }}
            textColor="primary"
            onChange={handleChange}
            aria-label="lab"
          >
            {label.map((e) => (
              <Tab
                key={e.value}
                label={
                  e.value === "3" && ordersPlaced.length > 0 ? (
                    <Badge badgeContent={ordersPlaced.length} color="error">
                      <Typography
                        component="span"
                        variant="inherit"
                        color="#fff"
                        mt={0.4}
                      >
                        {e.description}
                      </Typography>
                    </Badge>
                  ) : (
                    <Typography
                      mt={0.4}
                      component="span"
                      variant="inherit"
                      color="#fff"
                    >
                      {e.description}
                    </Typography>
                  )
                }
                value={e.value}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box>
            {foods?.map((e: Food, i: number) => (
              <Card items={e} idItems={i} key={e.id} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box>
            {drinks?.map((e: Drink, i: number) => (
              <Card items={e} idItems={i} key={e.id} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <ArccodionOrder />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Menu;
