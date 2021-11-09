import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

const Testimonial = ({ patient }) => {
  const { coments, name, state, img } = patient;
  return (
    <Grid item xs={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, p: 4 }}
            color="text.secondary"
            gutterBottom
          >
            {coments}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
            <Avatar alt="Remy Sharp" src={img} />
            <Stack direction="column">
              <Typography sx={{ fontSize: 14 }} color="#16D2D2" gutterBottom>
                {name}
              </Typography>
              <Typography
                sx={{ fontSize: 10, textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                {state}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonial;
