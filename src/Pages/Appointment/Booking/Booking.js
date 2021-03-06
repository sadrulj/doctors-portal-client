import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  const { name, time, space } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h4" gutterBottom style={{ color: "#16D2D2" }}>
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            style={{
              backgroundColor: "#16D2D2",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
