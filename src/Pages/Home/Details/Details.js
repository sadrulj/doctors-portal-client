import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const varticalCenter = {
  display: "flex",
  alignItems: "center",
};

const Details = () => {
  return (
    <Container sx={{ flexGrow: 1, marginTop: "-120px" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item
            style={{
              ...varticalCenter,
              backgroundColor: "#16D2D2",
              color: "white",
              padding: "20px",
            }}
          >
            <Grid>
              <AccessTimeIcon sx={{ fontSize: 90 }} />
            </Grid>
            <Grid>
              <Typography
                variant="h4"
                style={{ fontSize: "24px", fontWeight: "bolder" }}
              >
                Opening Hours
              </Typography>
              <Typography variant="h6" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            style={{
              ...varticalCenter,
              backgroundColor: "#3A3C3C",
              color: "white",
              padding: "20px",
            }}
          >
            <Grid>
              <LocationOnIcon sx={{ fontSize: 90 }} />
            </Grid>
            <Grid>
              <Typography
                variant="h4"
                style={{ fontSize: "24px", fontWeight: "bolder" }}
              >
                Visit our location
              </Typography>
              <Typography variant="h6" style={{ fontSize: "14px" }}>
                Brooklyn, NY 10036, United States
              </Typography>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            style={{
              ...varticalCenter,
              backgroundColor: "#16D2D2",
              color: "white",
              padding: "20px",
            }}
          >
            <Grid>
              <WifiCalling3Icon sx={{ fontSize: 90 }} />
            </Grid>
            <Grid>
              <Typography
                variant="h4"
                style={{ fontSize: "24px", fontWeight: "bolder" }}
              >
                Contact us now
              </Typography>
              <Typography variant="h6" style={{ fontSize: "14px" }}>
                +000 123 456789
              </Typography>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
