import { Alert, Snackbar } from "@mui/material";

import { SnackProps } from "../../models/Snack";

const SimpleSnackbar = ({ status, description, severity }: SnackProps) => {
  return (
    <Snackbar open={status} autoHideDuration={6000}>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {description}
      </Alert>
    </Snackbar>
  );
};

export default SimpleSnackbar;
