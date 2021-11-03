import React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import treatments from "../../../images/treatment.png";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ display: "flex", my: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 400 }}
        image={treatments}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h2">
            Exceptional Dental <br /> Care,on Your Terms
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            style={{ marginTop: "30px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit
            repudiandae recusandae cupiditate voluptates autem blanditiis
            voluptatum perspiciatis quae quaerat! Molestias quos ut voluptatum,
            officiis architecto accusamus voluptas quidem corrupti cupiditate
            aspernatur illum animi autem quaerat voluptates, nostrum sequi
            molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum enim magnam nisi voluptate iusto, dolores dolor voluptates
            molestiae beatae? Nemo vero repellendus accusantium reprehenderit
            quos, cum dolores mollitia quae, ut, exercitationem consequuntur
            impedit odit sapiente voluptas aperiam? Eaque, eos ratione?
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#16D2D2", marginTop: "30px" }}
          >
            Learn More
          </Button>
        </CardContent>
      </Box>
    </Container>
  );
};

export default About;
