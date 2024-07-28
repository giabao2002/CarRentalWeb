import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, LinearProgress, Box } from "@mui/material";

import { getAllCars } from "../../redux/actions";
import { productState$ } from "../../redux/selector";

import Search from "../../components/Search";
import HelpText from "../../components/HelpText";
import Footer from "../../components/Footer";

import background from "../../assets/interface/backgroundHome.jpg";

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
    <Grid container spacing={2} sx={{ marginTop: "2px" }}>
      {isLoading ? (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
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
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} width="100%">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "60vh",
                width: "100%",
              }}
            >
              <Search />
            </Grid>
          </Grid>
          <HelpText />
          <Footer />
        </Grid>
      )}
    </Grid>
  );
}
