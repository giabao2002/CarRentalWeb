import React, { useEffect, useState } from "react";
import CustomField from "../../../components/Field/TextField";
import { useSelector, useDispatch } from "react-redux";
import { userState$ } from "../../../redux/selector";
import { register } from "../../../redux/actions";
import {
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

export default function Register() {
  const user = useSelector(userState$)?.info;
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [isEmpty, setEmpty] = useState("");
  const dispatch = useDispatch();

  const formList = [
    {
        name: "username",
        label: "Tên người dùng",
        type: "text",
        width: 12,
        value: values.username,
        required: true,
      },
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

  const handleChange = event => {
    if (event.target) {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    }
  };

  const handleRegister = React.useCallback(() => {
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
      dispatch(register.registerRequest(values));
      setValues({
        userName: "",
        email: "",
        password: "",
      });
    }
  }, [values, dispatch]);

  useEffect(() => {
    if (user) {
      setLoading(false);
      window.location.href = "/login";
    }
  }, [user]);

  useEffect(() => {
    if (isLoading && !user) {
      setTimeout(() => {
        setLoading(false);
        setValues({
          userName: "",
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
          Đăng ký
        </Typography>
        {formList.map(elm => (
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
          onClick={handleRegister}
          disabled={isLoading}
          variant="contained"
          color="success"
          sx={{ marginTop: "10px" }}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Submit"}
        </Button>
      </Paper>
    </Grid>
  );
}