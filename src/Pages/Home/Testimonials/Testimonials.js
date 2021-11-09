import React from "react";
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import Testimonial from "../Testimonial/Testimonial";

const patients = [
  {
    id: 1,
    coments:
      "It is a long established fact that by readable content of a lot layout. The point of using Lorem a more-or-less normal distribut using Content here content ",
    name: "Winson Herry",
    state: "Califonia",
    img: people1,
  },
  {
    id: 2,
    coments:
      "It is a long established fact that by readable content of a lot layout. The point of using Lorem a more-or-less normal distribut using Content here content ",
    name: "Winson Herry",
    state: "Califonia",
    img: people2,
  },
  {
    id: 3,
    coments:
      "It is a long established fact that by readable content of a lot layout. The point of using Lorem a more-or-less normal distribut using Content here content ",
    name: "Winson Herry",
    state: "Califonia",
    img: people3,
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ flexGrow: 1, border: 0, margin: "100px auto" }}>
      <Typography
        sx={{
          fontWeight: 500,
          color: "#16D2D2",
          margin: "30px 0 30px 0",
          textAlign: "left",
        }}
        variant="h6"
        component="div"
      >
        TESTIMONIAL
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          margin: "30px 0 30px 0",
          textAlign: "left",
        }}
        variant="h4"
        component="div"
      >
        What's Our Patients <br /> Says
      </Typography>
      <Grid container spacing={3} sx={{ display: "flex" }}>
        {patients.map((patient) => (
          <Testimonial key={patient.id} patient={patient}></Testimonial>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
