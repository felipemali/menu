import { Accordion, AccordionDetails, Box, Typography } from "@mui/material/";

import { MenuContext } from "../../context/MenuContext";
import { useContext } from "react";
// import { useOrderResume } from "../../hooks/useOrderResume";

const ArccodionOrder = () => {
  const { ordersPlaced } = useContext(MenuContext);

  // const totalPrice = useOrderResume(ordersPlaced);
  return (
    <Box>
      {ordersPlaced.map((orderGroup, arrayIndex) => (
        <Box key={arrayIndex}>
          <Accordion sx={{ mt: 2 }}>
            <AccordionDetails sx={{ textAlign: "left" }}>
              {orderGroup.table && (
                <Typography
                  sx={{
                    textShadow:
                      "1px 1px 2px #1f1e1e, 2px 2px 4px #555, 3px 3px 6px #aaa",
                  }}
                  variant="h6"
                  color="#fa942e"
                  fontWeight={600}
                  component="p"
                  textAlign="center"
                  m="auto"
                >
                  {`Mesa: ${orderGroup.table}`}
                  <br />
                </Typography>
              )}
              {orderGroup.items.map((item, innerIndex) => (
                <Box key={innerIndex}>
                  <Typography
                    variant="inherit"
                    component="span"
                    fontSize={19}
                    color="#474646"
                  >
                    {item.qty === 0 ? "" : item.qty}
                    {item.qty === 0 ? "" : "- "}
                    {item.name}
                    <br />
                  </Typography>
                </Box>
              ))}
              {orderGroup.totalPrice && (
                <Box display="flex" alignItems="center" mt={1}>
                  <Typography
                    variant="inherit"
                    component="span"
                    fontSize={19}
                    color="#474646"
                  >{`Total:`}</Typography>
                  <Typography
                    variant="inherit"
                    ml={0.5}
                    component="span"
                    fontSize={19}
                    color="#008000"
                  >
                    {orderGroup.totalPrice}R$
                  </Typography>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
          {/* <Typography>{`Total Geral: ${totalPrice}R$`}</Typography> */}
        </Box>
      ))}
    </Box>
  );
};
export default ArccodionOrder;
