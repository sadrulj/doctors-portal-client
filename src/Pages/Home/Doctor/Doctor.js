import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const Doctor = ({ doc }) => {
  const { img, name, phone } = doc;
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {phone}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Doctor;
