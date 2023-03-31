import React from "react";
import "aos/dist/aos.css";
import { Grid, Box } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import DrawerAppBar from "../components/Header";
import Aos from "aos";
import { useEffect } from "react";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LanguageIcon from "@mui/icons-material/Language";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
    </>
  );
}
export default LandingPage;
