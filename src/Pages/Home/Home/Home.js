import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import About from "../About/About";
import Doctors from "../Doctors/Doctors";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Details />
      <Services />
      <About />
      <AppointmentBanner />
      <Doctors />
      <Testimonials />
    </div>
  );
};

export default Home;
