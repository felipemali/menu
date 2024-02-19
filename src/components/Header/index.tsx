import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { Fastfood, Menu } from "@mui/icons-material";
import { css } from "./css";
import DrawerList from "../Drawer";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box flexGrow={1}>
      <AppBar position="static" sx={css.appBar}>
        <Toolbar>
          <IconButton size="large" edge="start" color="warning" sx={{ mr: 2 }}>
            {/* <Menu /> */}
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
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="warning"
                sx={{ mr: 3 }}
              >
                <Fastfood />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
