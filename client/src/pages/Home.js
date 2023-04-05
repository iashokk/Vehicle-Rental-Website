import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsActions";
import { Col, Row, Divider, DatePicker, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/material";
import { Grid, Box } from "@mui/material";
import EvStationIcon from "@mui/icons-material/EvStation";
import GroupIcon from "@mui/icons-material/Group";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/joy/Button";
import DrawerAppBar from "../components/Header";

const { RangePicker } = DatePicker;
function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  function setFilter(values) {
    var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");

    var temp = [];

    for (var car of cars) {
      if (car.bookedTimeSlots.length == 0) {
        temp.push(car);
      } else {
        for (var booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(car);
          }
        }
      }
    }

    setTotalcars(temp);
  }
  const rangePickerStyle = {
    height: "40px",
    borderRadius: "15px",
    border: "none",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    padding: "8px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#525252",
    marginBottom: "24px",
    marginTop: "16px",
    transition: "all 0.2s ease-in-out",
    "&:hover, &:focus": {
      outline: "none",
      boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.2)",
    },
  };

  const rangePickerDropdownStyle = {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
  };
  return (
    <>
      {" "}
      <DrawerAppBar />
      <br />
      <br />
      <br />
      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={setFilter}
            style={rangePickerStyle}
            dropdownStyle={rangePickerDropdownStyle}
          />
        </Col>
      </Row>
      {loading == true && <Spinner />}
      <Row justify="center" gutter={12}>
        <CssVarsProvider>
          {totalCars.map((car) => {
            return (
              <Sheet
                sx={{
                  width: 320,
                  mx: 2, // margin left & right
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
                <span>
                  {" "}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    {car.name}
                  </Typography>
                </span>

                <img src={car.image} className="carimg1" />
                <Box sx={{ display: "flex", px: 0 }}>
                  <Grid container sx={{ gap: 5 }}>
                    <Grid item sx={{ display: "flex" }}>
                      <EvStationIcon sx={{ marginTop: 1 }} />
                      <Typography sx={{ color: "gray" }}>
                        {car.fuelType}
                      </Typography>
                    </Grid>

                    <Grid item sx={{ display: "flex" }}>
                      <GroupIcon sx={{ marginTop: 1 }} />
                      <Typography sx={{ fontWeight: "bold" }}>
                        {car.capacity}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ display: "flex", my: 0, px: 0 }}>
                  <Grid container sx={{ gap: 5 }}>
                    <Grid item sx={{ display: "flex" }}>
                      <CurrencyRupeeIcon sx={{ marginTop: 1 }} />
                      <Typography sx={{ color: "gray" }}>
                        {car.rentPerHour} / hour
                      </Typography>
                    </Grid>

                    <Grid item sx={{ display: "flex" }}>
                      <Button sx={{ width: 120, marginTop: 0 }}>
                        <Link to={`/booking/${car._id}`}>
                          <Typography sx={{ color: "white", fontSize: 14 }}>
                            Book Now
                          </Typography>
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Sheet>
            );
          })}
        </CssVarsProvider>
      </Row>
    </>
  );
}

export default Home;
