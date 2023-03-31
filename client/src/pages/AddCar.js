import { Col, Row, Form, Input, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import DrawerAppBar from "../components/Header";
import Spinner from "../components/Spinner";
import { addCar } from "../redux/actions/carsActions";

function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  const onFinish = (values) => {
    values.bookedTimeSlots = [];

    dispatch(addCar(values));
    console.log(values);
  };

  return (
    <>
      <DrawerAppBar />
      <br />
      <br />

      {loading && <Spinner />}
      <Row justify="center" style={{ marginTop: "2rem" }}>
        <Col lg={12} sm={24} xs={24} style={{ padding: "1rem" }}>
          <Form layout="vertical" onFinish={onFinish}>
            <h3 style={{ marginBottom: "1rem" }}>Add New Vehicle</h3>
            <hr />
            <Form.Item
              name="name"
              label="Vehicle name"
              rules={[
                { required: true, message: "Please input the Vehicle name" },
              ]}
            >
              <Input placeholder="Enter the Vehicle name" />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image URL"
              rules={[
                { required: true, message: "Please input the image URL" },
              ]}
            >
              <Input placeholder="Enter the image URL" />
            </Form.Item>
            <Form.Item
              name="rentPerHour"
              label="Rent per hour"
              rules={[
                { required: true, message: "Please input the rent per hour" },
              ]}
            >
              <Input placeholder="Enter the rent per hour" />
            </Form.Item>
            <Form.Item
              name="capacity"
              label="Capacity"
              rules={[{ required: true, message: "Please input the capacity" }]}
            >
              <Input placeholder="Enter the capacity" />
            </Form.Item>
            <Form.Item
              name="fuelType"
              label="Fuel Type"
              rules={[
                { required: true, message: "Please input the fuel type" },
              ]}
            >
              <Input placeholder="Enter the fuel type" />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button className="btn1c" htmlType="submit">
                ADD Vehicle
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default AddCar;
