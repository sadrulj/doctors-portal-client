import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const bannerBg = {
  background: `url(${bg})`,
  height: "600px",
};
const varticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ ...varticalCenter, textAlign: "left" }}>
          <Box>
            <Typography variant="h3" sx={{ textAlign: "left" }}>
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                color: "#bdbdbd",
                textAlign: "left",
                marginTop: "30px",
                padding: "0 80px 0 0",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              officiis perspiciatis debitis, numquam sed omnis qui dolores nobis
              a magni.
            </Typography>
            <NavLink to="/appointment" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#16D2D2",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "40px",
                }}
              >
                Get Appointment
              </Button>
            </NavLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={varticalCenter}>
          <img width="500px" src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
