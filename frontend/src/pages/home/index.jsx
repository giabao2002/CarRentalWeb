import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, LinearProgress, Box } from "@mui/material";

import MyAppBar from "../../components/Appbar";
import { getAllCars } from "../../redux/actions";
import { productState$ } from "../../redux/selector";

export default function Home() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);
  const cars = useSelector(productState$)?.cars;

  React.useEffect(() => {
    dispatch(getAllCars.getAllCarsRequest());
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (cars?.length > 0) {
        setLoading(false);
      }
    }, 3000);
  }, [cars]);
  return (
    <Grid container spacing={2}>
      {isLoading ? (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="101.6vh"
        >
          <Box sx={{ width: "20%" }}>
            <LinearProgress />
          </Box>
          <Typography variant="h5" sx={{ marginTop: "10px" }}>
            Loading...
          </Typography>
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} width="100%">
            <MyAppBar />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
