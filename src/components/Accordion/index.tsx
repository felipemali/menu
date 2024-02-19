import { Accordion, AccordionDetails, Typography } from "@mui/material/";

import { Order } from "../../models/Order";
import { useOrderResume } from "../../hooks/useOrderResume";

type ArccodionOrderProps = {
  items: Order[] | [];
};

const ArccodionOrder = ({ items }: ArccodionOrderProps) => {
  const total = useOrderResume(items);

  console.log(items);

  return (
    <div>
      <Accordion>
        <AccordionDetails sx={{ textAlign: "left" }}>
          {items?.map((e, i) => (
            <Typography variant="inherit" component="span">
              {e.qty === 0 ? "" : e.qty} {e.qty === 0 ? "" : "-"}
              {e.name}
              {`Mesa: ${e.table}`}
              <br />
            </Typography>
          ))}

          <Typography component="span" variant="inherit" fontSize={17}>
            {`Total: `}
            <Typography color="#008000" fontSize={19} component="span">
              {`${total}R$`}
            </Typography>
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ArccodionOrder;
