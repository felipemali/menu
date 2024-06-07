import { useSwipeable } from "react-swipeable";
import { Accordion, AccordionDetails, Box, Typography } from "@mui/material";
import { OrderGroup } from "../../context/MenuContext";
import { useEffect } from "react";

type SwipeableGroupType = {
  onFinalize: (value: OrderGroup) => void;
  orderGroup: OrderGroup;
};
const SwipeableGroup = ({ orderGroup, onFinalize }: SwipeableGroupType) => {
  const classlist = document.body.classList;
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      onFinalize(orderGroup);
      classlist.remove("no-scroll"); // Remove no-scroll after swipe action
    },
    onSwiping: () => {
      classlist.add("no-scroll"); // Add no-scroll during swipe action
    },
    onSwiped: () => {
      classlist.remove("no-scroll"); // Ensure no-scroll is removed after swipe action
    },
    trackMouse: true,
  });

  // Clean up no-scroll class on component unmount
  useEffect(() => {
    return () => {
      classlist.remove("no-scroll");
    };
  }, [classlist]);

  return (
    <Accordion
      sx={{
        mt: 2,
        width: "100%",
        p: 0,
        // background: "linear-gradient(420deg, #252424 10%, #807a7af8 95%)",
        boxShadow:
          "0 -2px 15px rgba(0, 0, 0, 0.25), 10px 6px 166px rgba(0, 0, 0, 0.22)",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        background: "linear-gradient(90deg, #220e03f8 8%, #4d1f04f8 95%)",
        "&:hover": {
          transform: "scale(1.02)",
        },
        "& .MuiAccordionSummary-root": {
          backgroundColor: "#FFFFFF", // White for contrast
          color: "#220e03", // Dark brown for text
        },
        "& .MuiAccordionDetails-root": {
          backgroundColor: "#FF4500", // Golden Yellow for details
          color: "#4d1f04", // Darker text color
        },
      }}
      {...handlers}
    >
      <AccordionDetails
        sx={{
          textAlign: "left",
          width: "95%",
          flexGrow: 1,
          typography: "body1",
          // borderBottom: "4px solid #000",
          paddingBottom: "1rem",
          // boxShadow: "0px -2px 15px #807f7f",
          transition: "box-shadow 0.3s ease-in-out",
          borderRadius: "10px",
          // background: "#46200cf8",
        }}
      >
        {orderGroup.table && (
          <Typography
            variant="h5"
            // color="#dd842a"
            color="#fff"
            fontWeight={600}
            component="p"
            textAlign="center"
            m="auto"
          >
            {`Mesa ${orderGroup.table}`}
            <br />
          </Typography>
        )}
        {orderGroup.items.map((item, innerIndex) => (
          <Box key={innerIndex} mt={orderGroup.table ? 1 : 0}>
            <Typography
              variant="inherit"
              component="span"
              fontSize={19}
              // color="#474646"
              color="#fff"
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
              // color="#474646"
              color="#fff"
            >{`Total:`}</Typography>
            <Typography
              variant="inherit"
              ml={0.5}
              component="span"
              fontSize={22}
              // color="#1fb11f"
              color="#fff"
            >
              {orderGroup.totalPrice}R$
            </Typography>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default SwipeableGroup;
