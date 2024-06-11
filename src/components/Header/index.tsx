import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { css } from "./css";
import DrawerList from "../Drawer";
// import RefreshIcon from "@mui/icons-material/Refresh";
import { Fastfood } from "@mui/icons-material";
const handleRefreshClick = () => {
  window.location.reload();
};

const Header = () => {
  return (
    <Box flexGrow={1}>
      <AppBar position="fixed" sx={css.appBar}>
        <Toolbar>
          <IconButton size="large" edge="start" color="warning">
            <DrawerList />
          </IconButton>
          <Typography
            component="span"
            variant="h6"
            color="coral"
            flexGrow={1}
            textAlign="center"
          >
            Cardápio
          </Typography>

          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleRefreshClick}
              color="warning"
            >
              <Fastfood fontSize="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
