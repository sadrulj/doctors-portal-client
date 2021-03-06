import React, { useState } from "react";
import { Container, Grid, Alert } from "@mui/material";
import Booking from "../Booking/Booking";
import { Typography } from "@mui/material";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM-9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmatic Dentistry",
    time: "10:05 AM-11:30 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00 PM-6:30 pM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protaction",
    time: "7:00 PM-8:30 PM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8:00 AM-9:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00 AM-9:00 AM",
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography
        variant="h4"
        style={{
          color: "#16D2D2",
          margin: "40px 0",
          fontWeight: "bolder",
        }}
      >
        Available Appointments on {date.toDateString()}
        {bookingSuccess && (
          <Alert severity="success">Appointment Booked succesfully!!</Alert>
        )}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
