import React from "react";
import doctorsImg from "../../../images/doctor-small.png";
import Doctor from "../Doctor/Doctor";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const doctors = [
  {
    id: "01",
    img: doctorsImg,
    name: "Caudi",
    phone: "+61 452 200 126",
  },
  {
    id: "02",
    img: doctorsImg,
    name: "Caudi",
    phone: "+61 452 200 126",
  },
  {
    id: "03",
    img: doctorsImg,
    name: "Caudi",
    phone: "+61 452 200 126",
  },
];

const Doctors = () => {
  return (
    <Container sx={{ flexGrow: 1, border: 0 }}>
      <Typography
        sx={{ fontWeight: 500, color: "#16D2D2", margin: "30px 0 30px 0" }}
        variant="h6"
        component="div"
      >
        OUR DOCTORS
      </Typography>
      <Grid container spacing={2} sx={{ display: "flex" }}>
        {doctors.map((doc) => (
          <Doctor key={doc.id} doc={doc}></Doctor>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
