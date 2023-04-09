import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function DrawerAppBar() {
  const [, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [username, setUsername] = useState(null);

  // Retrieve the username from local storage on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user?.username);
    console.log("username", user?.username);
  }, []);
  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{  background: 'linear-gradient(90deg, #E2F3F5 0%, #AED6F1 40%, #2980B9 100%)', alignItems: "left" }}
        elevation={0}
        
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "flex-start",
              color: "black",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Vehicle Rent
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Button
              color="black"
              href="/"
              sx={{
                borderRadius: 0,
                borderBottom:
                  location.pathname === "/"
                    ? "2px solid white"
                    : "2px solid blue",
                "&:hover": {
                  borderBottom: "2px solid white",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={15}
                sx={{
                  color: "black",
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                <a href="/">Home</a>
              </Typography>
            </Button>
            <Button
              color="black"
              href="/bookAcar"
              sx={{
                borderRadius: 0,
                borderBottom:
                  location.pathname === "/bookAcar"
                    ? "2px solid white"
                    : "2px solid blue",
                "&:hover": {
                  borderBottom: "2px solid white",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={15}
                sx={{
                  color: "black",
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                <a href="/bookAcar">Book a Vehicle</a>
              </Typography>
            </Button>

            <Button
              color="black"
              href="/userbookings"
              sx={{
                borderRadius: 0,
                borderBottom:
                  location.pathname === "/userbookings"
                    ? "2px solid white"
                    : "2px solid blue",
                "&:hover": {
                  borderBottom: "2px solid white",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={15}
                sx={{
                  color: "black",
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                <a href="/userbookings">Bookings</a>
              </Typography>
            </Button>

            {username === "admin001" && (
              <Button
                color="black"
                href="/admin"
                sx={{
                  borderRadius: 0,
                  borderBottom:
                    location.pathname === "/admin" ||
                    location.pathname === "/addcar" ||
                    /^\/editcar\/[a-zA-Z0-9]+$/.test(location.pathname)
                      ? "2px solid white"
                      : "2px solid blue",
                  "&:hover": {
                    borderBottom: "2px solid white",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  fontSize={15}
                  sx={{
                    color: "black",
                    fontFamily: "Montserrat, sans-serif",
                    textTransform: "capitalize",
                    letterSpacing: "1px",
                    transition: "all .3s ease-in-out",
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  <a href="/admin">Admin</a>
                </Typography>
              </Button>
            )}

            <Button
              color="black"
              href="/login"
              sx={{
                borderRadius: 0,
                borderBottom:
                  location.pathname === "/login"
                    ? "2px solid white"
                    : "2px solid blue",
                "&:hover": {
                  borderBottom: "2px solid white",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={15}
                sx={{
                  color: "black",
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  transition: "all .3s ease-in-out",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                {location.pathname === "/login" ? "Login" : "Logout"}
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
