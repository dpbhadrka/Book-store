import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from "@mui/material/styles";
import { Link } from "react-router-dom";

const pages = ["Home", "Books", "Cart", "About", "Login"];
const settings = ["Profile", "LogOut"];

// The actual ResponsiveAppBar component
function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // For theme
  const { mode, setMode } = useColorScheme("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // The actual thing which is returning in ResponnsiveAppBar
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Book Icon */}
          <AutoStoriesIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

          {/* BookHub Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BookHub
          </Typography>

          {/* Navbar for small devices */}
          {/* Menu icon for small devices for accessing the menu items. */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    width: "90vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    style={{ all: "unset" }}
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  >
                    <Typography
                      sx={{
                        color: "#3498db",
                        fontSize: "1.5rem",
                      }}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navbar for the big screen (a simple navigation bar).*/}

          {/* BookHub Icon */}
          <AutoStoriesIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          {/* BookHub Title */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BookHub
          </Typography>

          {/* Navbar menu item for big screen. */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "1.5rem",
              mr: "3rem",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                sx={{ all: "unset" }}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#fff", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {/* Theme changing icon. */}
          <Typography
            sx={{
              all: "unset",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
            variant="text"
            onClick={() => {
              if (mode === "light") {
                setMode("dark");
              } else {
                setMode("light");
              }
            }}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </Typography>

          {/* Search */}
          {/* <Box
            sx={{
              flexGrow: 0.3,
              display: { xs: "none", md: "flex" },
            }}
          >
            <input
              style={{
                all: "unset",
                border: "1px solid #ffff",
                padding: "10px",
                color: "#fff",
                borderRadius: "2rem",
              }}
              placeholder="Search"
              type="search"
              name="search"
              id="searchBook"
            />
          </Box> */}
          {/* Profile section */}
          {/* <Box sx={{ flexGrow: 0, width: "15%", textAlign: "right" }}></Box> */}
          {/* <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    background: "none",
                    border: "1px solid white",
                    color: "white",
                  }}
                  alt=""
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography
                  sx={
                    mode === "light" ? { color: "black" } : { color: "white" }
                  }
                  textAlign="center"
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
