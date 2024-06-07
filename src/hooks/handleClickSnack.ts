import { AlertColor } from "@mui/material";
import { Order } from "../models/Order";
import { SnackProps } from "../models/Snack";

type handleClickProps = {
  setSnack: (newValue: SnackProps) => void;
  text: string;
  open?: boolean;
  openn?: boolean;
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
  severity: AlertColor | undefined;
};

export const handleClickSnack = ({
  open,
  text,
  openn,
  setSnack,
  setOrder,
  severity,
}: handleClickProps) => {
  if (openn) {
    setTimeout(() => {
      setSnack({
        status: false,
        description: "",
        severity,
      });
    }, 1300);
    setSnack({
      status: true,
      description: text,
      severity,
    });
    return;
  }
  if (!open) {
    setTimeout(() => {
      setSnack({
        status: true,
        description: text,
        severity,
      });
      setOrder([]);
    }, 1200);
    setTimeout(() => {
      setSnack({
        status: false,
        description: "",
        severity,
      });
    }, 2800);
  }
};
