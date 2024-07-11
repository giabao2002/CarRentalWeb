import * as React from "react";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ROUTER } from "../router";

import Home from "./home";
import Login from "./sign/login";
import Register from "./sign/register";
import MyAppBar from "../components/Appbar";

function App () {
  return (
    <Grid container>
      <MyAppBar />
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route exact path={ROUTER.LOGIN} element={<Login />} />
        <Route exact path={ROUTER.REGISTER} element={<Register />} />
      </Routes>
    </Grid>
  );
};

export default App;
