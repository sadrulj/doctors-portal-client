import * as React from "react";
import { Grid } from "@mui/material";
import Calander from "../../Shared/Calander/Calander";
import Appoinments from "../Appoinments/Appoinments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Calander date={date} setDate={setDate}></Calander>
      </Grid>
      <Grid item xs={6}>
        <Appoinments date={date}></Appoinments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
