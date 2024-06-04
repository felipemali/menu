import { Accordion, AccordionDetails, Box, Typography } from "@mui/material/";

import { MenuContext } from "../../context/MenuContext";
import { useContext } from "react";

const ArccodionOrder = () => {
  const { ordersPlaced } = useContext(MenuContext);
  return (
    <Box>
      {ordersPlaced.map((orderGroup, arrayIndex) => (
        <Box key={arrayIndex}>
          <Accordion sx={{ mt: 2 }}>
            <AccordionDetails sx={{ textAlign: "left" }}>
              {orderGroup.items.map((item, innerIndex) => (
                <div key={innerIndex}>
                  <Typography variant="inherit" component="span">
                    {item.qty === 0 ? "" : item.qty} {item.qty === 0 ? "" : "-"}
                    {item.name}
                    <br />
                  </Typography>
                </div>
              ))}
              {orderGroup.table && (
                <Typography variant="inherit" component="span">
                  {`Mesa: ${orderGroup.table}`}
                  <br />
                </Typography>
              )}
              {orderGroup.totalPrice && (
                <Typography>{`Total: ${orderGroup.totalPrice}R$`}</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};
export default ArccodionOrder;
