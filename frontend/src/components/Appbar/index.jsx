import * as React from "react";

import {
  MenuItem,
  Tooltip,
  Button,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

import {CarRental, Logout} from "@mui/icons-material";

const pages = [
  {
    url: "/",
    title: "Trang chủ",
  },
  {
    url: "/",
    title: "Ký gửi xe",
  },
];
const settings = [
  {
    title: "Logout",
    icon: <Logout />,
  },
];

function MyAppBar() {
  const [user, setUser] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", color: "green", zIndex: 10 }}
    >
      <Container maxWidth="xl" sx={{ paddingTop: "10px" }}>
        <Toolbar disableGutters>
          <CarRental
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#5ACDAB",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#5ACDAB",
              textDecoration: "none",
            }}
          >
            RentalCar
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{ color: "black", display: "block", textTransform: "none", fontWeight: 500 }}
                href={page.url}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Typography textAlign="center" color="black">
                      {user.username ? user.username : ""}
                    </Typography>
                  </IconButton>
                </Tooltip>
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
                  {settings.map((setting, index) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" sx={{display:'flex', justifyContent:'center'}}>
                        {setting.icon}
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  href="/login"
                  sx={{ mr: 1, backgroundColor: "#5ACDAB" }}
                >
                  Đăng nhập
                </Button>
                <Button
                  variant="outlined"
                  href="/register"
                  sx={{ borderColor: "#5ACDAB", color: "#5ACDAB" }}
                >
                  Đăng ký
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
