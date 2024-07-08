import React from "react";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ROUTER } from "../router";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import Home from "./home";
// import Login from "./sign/login";
// import Register from "./sign/register";

const App = () => {
  return (
    <Grid container>
      <Routes>
        <Route exact path={ROUTER.HOME} element={<Home />} />
        {/* <Route exact path={ROUTER.LOGIN} element={<Login />} /> */}
        {/* <Route exact path={ROUTER.REGISTER} element={<Register />} /> */}
      </Routes>
      <NotificationContainer />
    </Grid>
  );
};

export default App;