import { useSwipeable } from "react-swipeable";
import { Accordion, AccordionDetails, Box, Typography } from "@mui/material";
import { OrderGroup } from "../../context/MenuContext";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

type SwipeableGroupType = {
  onFinalize: (value: OrderGroup) => void;
  orderGroup: OrderGroup;
};
const classlist = document.body.classList;

const SwipeableGroup = ({ orderGroup, onFinalize }: SwipeableGroupType) => {
  const [translateX, setTranslateX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setTranslateX(eventData.deltaX);
      setIsSwiping(true);
      classlist.add("no-scroll");
    },
    onSwiped: (eventData) => {
      if (eventData.dir === "Left" && eventData.velocity > 0.5) {
        onFinalize(orderGroup);
      }
      setTranslateX(0);
      setIsSwiping(false);
      classlist.remove("no-scroll");
    },
    trackMouse: true,
  });

  useEffect(() => {
    return () => {
      classlist.remove("no-scroll");
    };
  }, []);

  return (
    <Accordion
      sx={{
        mt: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        background: "linear-gradient(90deg, #a13d18 8%, #5a2607f8 95%)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: `translateX(${translateX}px)`,
        ...(isSwiping && {
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        }),
        "&:hover": {
          transform: `scale(1.02) translateX(${translateX}px)`,
        },
        "& .MuiAccordionSummary-root": {
          backgroundColor: "#FFFFFF",
          color: "#220e03",
        },
        "& .MuiAccordionDetails-root": {
          // backgroundColor: "#FF4500",
          background: "linear-gradient(90deg, #FF4500 8%, #632a09f8 95%)",
          borderRadius: "10px",
          color: "#4d1f04",
        },
      }}
      {...handlers}
    >
      <AccordionDetails sx={{ textAlign: "left" }}>
        {orderGroup.table && (
          <Box display="flex">
            <Typography
              variant="h5"
              color="#fff"
              fontWeight={600}
              component="p"
              textAlign="center"
              m="auto"
            >
              {`Mesa ${orderGroup.table}`}
              <br />
            </Typography>

            <DeleteIcon
              onClick={() => onFinalize(orderGroup)}
              fontSize="medium"
              sx={{ color: "#fff" }}
            />
          </Box>
        )}
        {orderGroup.items.map((item, innerIndex) => (
          <Box key={innerIndex} mt={orderGroup.table ? 2 : 0}>
            <Typography
              variant="inherit"
              component="span"
              fontSize={19}
              color="#FFFFFF"
            >
              {item.qty === 0 ? "" : item.qty}
              {item.qty === 0 ? "" : "- "}
              {item.name}
              <br />
            </Typography>
          </Box>
        ))}
        {orderGroup.totalPrice && (
          <Box display="flex" alignItems="center" mt={2}>
            <Typography
              variant="inherit"
              component="span"
              fontSize={19}
              color="#FFFFFF"
            >{`Total:`}</Typography>
            <Typography
              variant="inherit"
              ml={0.5}
              component="span"
              fontSize={19}
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
