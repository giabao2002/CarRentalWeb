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
  Link,
  Box,
  CircularProgress,
} from "@mui/material";

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
    <Grid item xs={12} className="container" sx={{ height: "98vh" }}>
      <Paper
        elevation={6}
        sx={{
          padding: "15px",
          width: "20%",
          display: "flex",
          flexDirection: "column",
          margin: "10% auto 20px auto",
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 24,
            fontFamily: "sans-serif",
            color: "green",
          }}
        >
          Đăng nhập
        </Typography>
        {formList.map( elm => (
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
          letiant="contained"
          color="success"
          sx={{ marginTop: "10px" }}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Submit"}
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Link underline="none" margin={"10px 0"} href="/register">
            Đăng ký tài khoản
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
}