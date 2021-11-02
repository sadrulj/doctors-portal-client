import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import Typography from "@mui/material/Typography";
import bg from "../../../images/appointment-bg.png";
import { Button } from "@mui/material";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.85)",
  backgroundBlendMode: "darken, luminosity",
  margin: 150,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img
            style={{ width: 400, marginTop: "-120px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontWeight: 500,
              color: "#5CE7ED",
              margin: "15px 0",
              textAlign: "left",
            }}
            variant="h6"
            component="div"
          >
            APPOINTMENT
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              color: "white",
              margin: "10px 0",
              textAlign: "left",
            }}
            variant="h4"
            component="div"
          >
            Make an appointment Today
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              color: "white",
              margin: "20px 0",
              textAlign: "left",
              fontSize: "14px",
            }}
            variant="h6"
            component="div"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its
          </Typography>
          <Button
            variant="contained"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              backgroundColor: "#59DBDF",
              marginTop: "50px",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
