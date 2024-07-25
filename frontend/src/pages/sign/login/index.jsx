import React, { useEffect, useState } from "react";
import CustomField from "../../../components/Field/TextField";
import { useSelector, useDispatch } from "react-redux";
import { userState$ } from "../../../redux/selector";
import { login } from "../../../redux/actions";
import {
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

import background from '../../../assets/interface/backgroundSign.jpg';

export default function Login() {
  const user = useSelector(userState$);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [isEmpty, setEmpty] = useState("");
  const dispatch = useDispatch();

  const formList = [
    {
      name: "email",
      label: "Email",
      type: "text",
      width: 12,
      value: values.email,
      required: true,
    },
    {
      name: "password",
      label: "Mật khẩu",
      type: "password",
      width: 12,
      value: values.password,
      required: true,
    },
  ];

  const handleChange = (event) => {
    if (event.target) {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    }
  };

  const handleLogin = React.useCallback(() => {
    for (let key in values) {
      if (values[key] === "") {
        setEmpty(key);
        break;
      } else {
        setEmpty(false);
      }
    }
    if (!isEmpty) {
      setLoading(true);
      dispatch(login.loginRequest(values));
      setValues({
        email: "",
        password: "",
      });
    }
  }, [values, dispatch]);

  useEffect(() => {
    if (user) {
      setLoading(false);
      window.location.href = "/";
    }
  }, [user]);

  useEffect(() => {
    if (isLoading && !user) {
      setTimeout(() => {
        setLoading(false);
        setValues({
          email: "",
          password: "",
        });
      }, 4000);
    }
  }, [isLoading, user]);

  return (
    <Grid
      item
      xs={12}
      className="container"
      sx={{
        height: "89.7vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        bacckgroundPosition: "center",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "40px 20px",
          width: "20%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 24,
            fontFamily: "Arial",
            color: "#5ACDAB",
          }}
        >
          Đăng nhập
        </Typography>
        {formList.map((elm) => (
          <CustomField
            key={elm.name}
            name={elm.name}
            label={elm.label}
            type={elm.type}
            width={elm.width}
            value={elm.value}
            required={elm.required}
            isEmpty={isEmpty}
            handleChange={handleChange}
          />
        ))}
        <Button
          onClick={handleLogin}
          disabled={isLoading}
          variant="contained"
          sx={{ marginTop: "10px", backgroundColor: "#5ACDAB" }}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Đăng nhập"}
        </Button>
      </Paper>
    </Grid>
  );
}
