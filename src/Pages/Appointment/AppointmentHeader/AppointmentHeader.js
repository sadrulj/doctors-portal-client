import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import Calander from "../../Shared/Calander/Calander";
import bg from "../../../images/bg.png";

const bannerBg = {
  background: `url(${bg})`,
  height: "600px",
};

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={6} style={{ marginTop: "100px" }}>
          <Typography
            variant="h4"
            style={{ marginBottom: "100px", color: "#16D2D2" }}
          >
            APPOINTMENTS
          </Typography>
          <Calander date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", marginTop: "100px" }}
            src={chair}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentHeader;
