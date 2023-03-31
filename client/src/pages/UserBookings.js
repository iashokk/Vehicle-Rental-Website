import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import { makeStyles } from "@mui/styles";
import moment from "moment";

import DrawerAppBar from "../components/Header";

const useStyles = makeStyles(() => ({
  bookingRow: {
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
    "& img": {
      borderRadius: 5,
    },
  },
  carName: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  bookingInfo: {
    marginBottom: "10px",
    "& b": {
      fontWeight: "bold",
    },
  },
}));
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);
  const classes = useStyles();
  return (
    <>
      <DrawerAppBar />

      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>
      <br />
      <br />
      <br />
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings
            .filter((o) => o.user === user._id)
            .map((booking) => (
              <Row
                gutter={16}
                className={`${classes.bookingRow} text-left`}
                key={booking._id}
              >
                <Col lg={6} sm={24}>
                  <p className={classes.carName}>{booking.car.name}</p>
                  <p className={classes.bookingInfo}>
                    Total hours: <b>{booking.totalHours}</b>
                  </p>
                  <p className={classes.bookingInfo}>
                    Rent per hour: <b>{booking.car.rentPerHour}</b>
                  </p>
                  <p className={classes.bookingInfo}>
                    Total amount: <b>{booking.totalAmount}</b>
                  </p>
                </Col>

                <Col lg={12} sm={24}>
                  <p className={classes.bookingInfo}>
                    Transaction Id: <b>{booking.transactionId}</b>
                  </p>
                  <p className={classes.bookingInfo}>
                    From: <b>{booking.bookedTimeSlots.from}</b>
                  </p>
                  <p className={classes.bookingInfo}>
                    To: <b>{booking.bookedTimeSlots.to}</b>
                  </p>
                  <p className={classes.bookingInfo}>
                    Date of booking:{" "}
                    <b>{moment(booking.createdAt).format("MMM DD yyyy")}</b>
                  </p>
                </Col>

                <Col lg={6} sm={24} className="text-right">
                  <img
                    src={booking.car.image}
                    height="140"
                    className="p-2"
                    alt={booking.car.name}
                  />
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </>
  );
}
export default UserBookings;
