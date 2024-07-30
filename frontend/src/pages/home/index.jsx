import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  LinearProgress,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

import { Person, Schema, EvStation } from "@mui/icons-material";

import { getAllCars } from "../../redux/actions";
import { productState$ } from "../../redux/selector";

import Search from "../../components/Search";
import HelpText from "../../components/HelpText";
import Footer from "../../components/Footer";

import background from "../../assets/interface/backgroundHome.jpg";

export default function Home() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);
  const { cars } = useSelector(productState$);

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

  console.log(cars);
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
            <Grid
              container
              mt={1}
              alignItems={"center"}
              mx={14}
              maxWidth={"100%"}
              gap={2}
            >
              {cars.map((car) => {
                const details = [
                  {
                    icon: (
                      <Person sx={{ color: "#5ACDAB", fontSize: "18px" }} />
                    ),
                    text: car?.seats + " chỗ",
                  },
                  {
                    icon: (
                      <Schema sx={{ color: "#5ACDAB", fontSize: "15px" }} />
                    ),
                    text: car?.engine,
                  },
                  {
                    icon: (
                      <EvStation sx={{ color: "#5ACDAB", fontSize: "18px" }} />
                    ),
                    text: car?.fuel_type,
                  },
                ];
                return (
                  <Card sx={{ width: 300, margin: "5px 10px" }} key={car?.id}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={`/cars/${car.images}`}
                        alt={car.name}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          fontWeight={600}
                          component="div"
                        >
                          {car.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="div"
                        >
                          {car.address}
                        </Typography>
                        <Box display="flex" justifyContent="space-between" mt={1} borderTop={1} borderColor={'#eeeee4'} pt={1}>
                          {details.map((detail, index) => (
                            <Box
                              key={index}
                              display="flex"
                              alignItems="center"
                              mx={1}
                            >
                              {detail.icon}
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {detail.text}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
          <HelpText />
          <Footer />
        </Grid>
      )}
    </Grid>
  );
}
