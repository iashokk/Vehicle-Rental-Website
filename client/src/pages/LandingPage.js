import React from "react";
import "aos/dist/aos.css";
import {
  Grid,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Person";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import DrawerAppBar from "../components/Header";
import Aos from "aos";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LanguageIcon from "@mui/icons-material/Language";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import CloseIcon from "@mui/icons-material/Close";
function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const addMessageToChatHistory = (message, isUser = false) => {
    setChatHistory((chatHistory) => [
      ...chatHistory,
      { message: message, isUser: isUser },
    ]);
  };
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleUserSubmit = (event) => {
    event.preventDefault();
    addMessageToChatHistory(userInput, true);
    setUserInput("");

    let botResponse;

    if (userInput.toLowerCase().includes("rental")) {
      botResponse =
        "Yes, we offer vehicle rental services. What type of vehicle are you interested in?";
    } else if (userInput.toLowerCase().includes("book")) {
      botResponse =
        "Of course, you can book a vehicle through our website. What date and time do you need the vehicle for?";
    } else if (
      userInput.toLowerCase().includes("hello") ||
      userInput.toLowerCase().includes("hi")
    ) {
      botResponse = "Hello there! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("hey")) {
      botResponse = "Hey there! What can I help you with?";
    } else if (
      userInput.toLowerCase().includes("goodbye") ||
      userInput.toLowerCase().includes("bye")
    ) {
      botResponse = "Goodbye! Have a great day.";
    } else if (
      userInput.toLowerCase().includes("thanks") ||
      userInput.toLowerCase().includes("thank you")
    ) {
      botResponse =
        "You're welcome! Is there anything else I can assist you with?";
    } else if (userInput.toLowerCase().includes("book")) {
      botResponse =
        "Of course, you can book a vehicle through our website. What date and time do you need the vehicle for?";
    } else if (userInput.toLowerCase().includes("thank")) {
      botResponse =
        "You're welcome! Is there anything else I can help you with?";
    } else if (
      userInput.toLowerCase().includes("goodbye") ||
      userInput.toLowerCase().includes("bye")
    ) {
      botResponse = "Goodbye! Have a great day!";
    } else if (
      userInput.toLowerCase().includes("bye") ||
      userInput.toLowerCase().includes("bye")
    ) {
      botResponse = "Goodbye! Have a great day!";
    } else if (
      userInput.toLowerCase().includes("see you ") ||
      userInput.toLowerCase().includes("bye")
    ) {
      botResponse = "Goodbye! Have a great day!";
    } else if (
      userInput.toLowerCase().includes("thank you") ||
      userInput.toLowerCase().includes("bye")
    ) {
      botResponse = "Goodbye! Have a great day!";
    } else if (
      userInput.toLowerCase().includes("thanks") ||
      userInput.toLowerCase().includes("tq") ||
      userInput.toLowerCase().includes("thenks")
    ) {
      botResponse = "Goodbye! Have a great day!";
    } else if (userInput.toLowerCase().includes("car")) {
      botResponse =
        "We have a wide selection of cars available for rental. see our site";
    } else if (userInput.toLowerCase().includes("bike")) {
      botResponse = "We have bike  available for rent. What bike do you need? see our site";
    } else if (
      userInput.toLowerCase().includes("people") &&
      userInput.toLowerCase().includes("fit")
    ) {
      botResponse =
        "The number of people that can fit in a car depends on the car model. What type of car are you interested in?";
    } else if (
      userInput.toLowerCase().includes("car seats") ||
      userInput.toLowerCase().includes("children")
    ) {
      botResponse =
        "Yes, we offer car seats for children. How many car seats do you need and what is the age of the child?";
    } else if (userInput.toLowerCase().includes("credit card")) {
      botResponse =
        "We do require a credit card to rent a car, but we also offer other payment options. What type of payment method are you interested in?";
    } else if (userInput.toLowerCase().includes("minimum age")) {
      botResponse =
        "The minimum age to rent a car is 21 years old. However, there may be additional requirements depending on the car model and rental location. Can you provide more details on your rental needs?";
    } else if (userInput.toLowerCase().includes("mileage limits")) {
      botResponse =
        "Yes, there are mileage limits on our rental cars. The limit varies depending on the rental location and car model. Can you provide more details on your rental needs?";
    } else if (
      userInput.toLowerCase().includes("gps") ||
      userInput.toLowerCase().includes("navigation")
    ) {
      botResponse =
        "Yes, we offer GPS and navigation systems in our rental cars for an additional fee. Would you like to add this option to your rental?";
    } else if (userInput.toLowerCase().includes("one-way trip")) {
      botResponse =
        "Yes, you can rent a car for a one-way trip. However, additional fees may apply depending on the rental location and drop-off destination. Can you provide more details on your rental needs?";
    } else if (userInput.toLowerCase().includes("payment methods")) {
      botResponse =
        "We accept various payment methods for car rentals, including credit cards, debit cards, and cash. Can you provide more details on your rental needs?";
    } else if (userInput.toLowerCase().includes("extend rental period")) {
      botResponse =
        "Yes, you can extend your rental period. However, additional fees may apply depending on the rental location and car model. Can you provide more details on your rental needs?";
    } else if (
      userInput.toLowerCase().includes("fuel usage") ||
      userInput.toLowerCase().includes("refueling")
    ) {
      botResponse =
        "Our rental cars come with a full tank of gas and must be returned with a full tank of gas. If you do not return the car with a full tank of gas, we will charge you for the missing fuel plus a refueling fee. Do you have any other questions about our fuel policy?";
    } else if (userInput.toLowerCase().includes("insurance coverage")) {
      botResponse =
        "Yes, we offer various insurance coverage options for our rental cars. Can you provide more details on your rental needs?";
    } else if (userInput.toLowerCase().includes("van")) {
      botResponse =
        "We have vans available for rent. What size van do you need?";
    } else if (userInput.toLowerCase().includes("rental period")) {
      botResponse =
        "Our rental periods are flexible. How long do you need the vehicle for?";
    } else if (userInput.toLowerCase().includes("rental price")) {
      botResponse =
        "Our rental prices vary depending on the type of vehicle and the rental period. Can you provide more details about what you're looking for?";
    } else if (userInput.toLowerCase().includes("rental location")) {
      botResponse =
        "We have rental locations across the country. Which location are you interested in?";
    } else if (userInput.toLowerCase().includes("rental insurance")) {
      botResponse =
        "We offer rental insurance for an additional fee. Would you like to add rental insurance to your reservation?";
    } else if (userInput.toLowerCase().includes("reservation confirmation")) {
      botResponse =
        "You will receive a confirmation email with your reservation details once you have completed the booking process.";
    } else if (userInput.toLowerCase().includes("pickup time")) {
      botResponse =
        "You can pick up your rental vehicle at any time during our business hours. What time would you like to pick up the vehicle?";
    } else if (userInput.toLowerCase().includes("drop-off time")) {
      botResponse =
        "You can drop off your rental vehicle at any time during our business hours. What time would you like to drop off the vehicle?";
    } else if (userInput.toLowerCase().includes("additional driver")) {
      botResponse =
        "We allow additional drivers for an additional fee. Would you like to add an additional driver to your reservation?";
    } else if (userInput.toLowerCase().includes("age requirements")) {
      botResponse =
        "You must be at least 21 years old to rent a vehicle from us.";
    } else if (userInput.toLowerCase().includes("payment options")) {
      botResponse =
        "We accept all major credit cards and debit cards for payment.";
    } else if (userInput.toLowerCase().includes("cancellation policy")) {
      botResponse =
        "Our cancellation policy varies depending on the type of reservation. Can you provide more details about your reservation?";
    } else if (userInput.toLowerCase().includes("vehicle availability")) {
      botResponse =
        "We have a large fleet of vehicles, but availability may vary depending on location and rental period. Can you provide more details about your reservation?";
    } else {
      botResponse = "Can you say clearly!?";
    }

    addMessageToChatHistory(botResponse, false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DrawerAppBar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          minHeight: "713px",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
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
              sx={{ paddingBottom: "15px", color: "black", opacity: 0 }}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              The Best Platform for Vehicle Rental
            </Typography>
            <Typography
              variant="h1"
              fontWeight={100}
              fontSize={25}
              sx={{ paddingBottom: "15px", color: "black", opacity: 0 }}
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              Ease of doing a vehicle rental safely and reliably. Of course at a
              low price.
            </Typography>

            <img
              src="https://i.ibb.co/QHQhmw9/car-removebg-preview.png"
              width={600}
            />
          </Grid>
          <Grid item xs={9} md={4} sx={{ paddingTop: 0 }}>
            <CssVarsProvider>
              <Sheet
                sx={{
                  width: 450,
                  height: 450,
                  mx: "auto",
                  my: 10,
                  py: 3,
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  opacity: 0,
                }}
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-once="true"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Typography
                  variant="h2"
                  fontWeight={600}
                  fontSize={30}
                  sx={{
                    color: "black",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  Welcome to Vehicle Rental
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "black", lineHeight: 1.5 }}
                  fontSize={18}
                >
                  We make renting a vehicle in India ridiculously simple. Apart
                  from Rentals being one of India’s largest independent vehicle
                  rental companies, we also have brand new vehicles of all
                  shapes and sizes to best suit the holiday you’ve got planned.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "black", lineHeight: 1.5 }}
                  fontSize={18}
                >
                  Whether it’s for a short trip or a long vacation, we’ve got
                  you covered. Our vehicles are always in top condition, and our
                  prices are competitive. Book your vehicle today and enjoy a
                  hassle-free rental experience!
                </Typography>
              </Sheet>
            </CssVarsProvider>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
        <Typography
          fontSize={25}
          align="center"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#333333" }}
          paddingBottom={5}
        >
          Why Us?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 4,
              mb: 4,
            }}
          >
            <PriceCheckIcon sx={{ fontSize: "3em" }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333333", mb: 2 }}
            >
              Best Price Guarantee
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 4,
              mb: 4,
              mx: 2,
            }}
          >
            <SupportAgentIcon sx={{ fontSize: "3em" }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333333", mt: 2, mb: 1 }}
            >
              24x7 Customer Care
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 4,
              mb: 4,
            }}
          >
            <ThumbUpAltIcon sx={{ fontSize: "3em" }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333333", mb: 2 }}
            >
              Customer Satisfaction
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 4,
              mb: 4,
            }}
          >
            <PercentOutlinedIcon sx={{ fontSize: "3em" }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333333", mb: 2 }}
            >
              Excellent Car Hire Discounts
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 4,
              mb: 4,
            }}
          >
            <LanguageIcon sx={{ fontSize: "3em" }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#333333", mb: 2 }}
            >
              International Self Drive
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "40px",
          zIndex: 999,
          animation: "slideIn 0.5s ease-out",
        }}
      >
        {isOpen ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "400px",
              width: "300px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ flexGrow: 1, overflow: "auto" }}>
              <List>
                {chatHistory.map((chat, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      justifyContent: chat.isUser ? "flex-end" : "flex-start",
                    }}
                  >
                    <ListItemText
                      primary={chat.message}
                      sx={{
                        backgroundColor: chat.isUser ? "#e6dcff" : "#fff",
                        borderRadius: "10px",
                        p: 2,
                        maxWidth: "80%",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box
              component="form"
              onSubmit={handleUserSubmit}
              sx={{ p: 2, borderTop: "1px solid #e6e6e6" }}
            >
              <Box sx={{ display: "flex" }}>
                <TextField
                  label="Type your message here..."
                  variant="outlined"
                  value={userInput}
                  onChange={handleUserInput}
                  fullWidth
                />
                <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                  <SendIcon />
                </Button>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                <Button variant="outlined" onClick={toggleChatbot}>
                  <CloseIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <Button
            variant="contained"
            onClick={toggleChatbot}
            sx={{
              backgroundColor: "light blue",
              color: " white",
              borderRadius: "10%",
              height: "60px",
              width: "120px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#006B8F",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", color: "white" }}
            >
              Chat with us
            </Typography>
          </Button>
        )}
      </Box>
    </>
  );
}
export default LandingPage;
