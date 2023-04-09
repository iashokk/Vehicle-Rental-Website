import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import AOS from "aos";
import Spinner from "../components/Spinner";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Grid, Box } from "@mui/material";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import DrawerAppBar from "../components/Header";
// import Link from '@mui/joy/Link';
import { useHistory } from "react-router-dom"; // You can also use <link> for styles
// ..
AOS.init();
function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  function onFinish(values) {
    dispatch(userRegister(values));
    console.log(values);
  }

  return (
    <>
      <DrawerAppBar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "713px",
          alignItems: "center",
          backgroundColor: "#3563E9",
          justifyContent: "center",
        }}
      >
        {loading && <Spinner />}

        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "1300px",
          }}
        >
          <Grid item xs={15} md={8}>
            <Typography
              variant="h1"
              fontWeight={1000}
              fontSize={35}
              sx={{ paddingBottom: "15px", color: "white" }}
            >
              Easy way to rent a vehicle at a low price
            </Typography>
            <Typography
              variant="h1"
              fontWeight={100}
              fontSize={25}
              sx={{ paddingBottom: "15px", color: "white" }}
            >
              Providing cheap vehicles rental services and safe and comfortable
              facilities.
            </Typography>

            <img
              src="https://i.ibb.co/HFVK83Z/20945933-removebg-preview.png"
              width={600}
            />
          </Grid>
          <Grid item xs={9} md={4} sx={{ paddingTop: 0 }}>
            <CssVarsProvider>
              <Sheet
                sx={{
                  width: 350,
                  mx: "auto", // margin left & right
                  my: 10, // margin top & botom
                  py: 3, // padding top & bottom
                  px: 2, // padding left & right
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: "sm",
                  boxShadow: "md",
                }}
                variant="outlined"
              >
                <Form onFinish={onFinish}>
                  <div>
                    <Typography
                      level="h4"
                      component="h1"
                      sx={{ color: "#1A37A7" }}
                    >
                      <b>Register</b>
                    </Typography>
                    <Typography level="body2">Sign Up to continue.</Typography>
                  </div>
                  <hr />
                  <Form.Item name="username">
                    <TextField
                      // html input attribute
                      // name="username"
                      placeholder="Username"
                      label="Username"
                    />
                  </Form.Item>

                  <Form.Item name="password">
                    <Input.Password
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      label="Password"
                      style={{ borderRadius: "10px", height: "40px" }}
                    />
                  </Form.Item>

                  <Form.Item name="cpassword">
                    <Input.Password
                      placeholder=" Confirm Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      label="Password"
                      style={{ borderRadius: "10px", height: "40px" }}
                    />
                  </Form.Item>
                  <button className="btn1 mt-1 mb-3">
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                      Register
                    </Typography>
                  </button>

                  <Link to="/login">
                    <Typography
                      fontSize="sm"
                      sx={{
                        paddingTop: 1.3,
                        display: "flex",
                        alignItems: "left",
                      }}
                    >
                      Click Here to Login
                    </Typography>
                  </Link>
                </Form>
              </Sheet>
            </CssVarsProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Register;
