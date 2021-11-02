import React from "react";
import { Container, Grid } from "@mui/material";
import chair from "../../../images/chair.png";
import Calander from "../../Shared/Calander/Calander";

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Calander date={date} setDate={setDate} />
        </Grid>
        <Grid xs={12} md={6}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
