import { AlertColor } from "@mui/material";

export type SnackProps = {
  status?: boolean;
  description: string;
  severity: AlertColor | undefined;
};
