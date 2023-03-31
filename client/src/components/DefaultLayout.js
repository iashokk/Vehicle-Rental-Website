import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { borderBottom } from "@mui/system";
import { AppBar, Toolbar, InputBase } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DownOutlined } from "@ant-design/icons";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const menuStyle = {
    width: "150px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    padding: "12px 0",
  };





  
  const dropdownStyle = {
    display: "flex",
    alignItems: "left",
    cursor: "pointer",
    color: "gray",
    fontSize: "16px",
    marginRight: "30px",
  };
  const menu = (
    <Menu style={menuStyle}>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin">Admin</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "#1A37A7" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div
        className="header"
        style={{
          borderBottom: "1px solid lightgray",
          backgroundImage: "linear-gradient(to bottom,#f0f6f9 , #f0f6f9)",
          paddingTop: "20px",
        }}
      >
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1>
                <b>
                  <Link to="/">Vehicle Rent</Link>
                </b>
              </h1>
              <div
                style={{
                  position: "relative",
                  marginBottom: "10px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                  width: "450px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    marginTop: "15px",
                    transform: "translateY(-50%)",
                  }}
                >
                  <SearchIcon
                    style={{
                      position: "absolute",
                      color: "gray",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  />
                </div>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  style={{ padding: "8px 36px" }}
                  width="450px"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Dropdown overlay={menu} placement="bottomCenter">
                  <div style={dropdownStyle}>
                    <SettingsIcon />
                   
                  </div>
                </Dropdown>
                <Avatar style={{ marginLeft: "15px" }}>
                  {user.username.charAt(0)}
                </Avatar>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
