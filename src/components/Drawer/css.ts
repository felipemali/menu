import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
