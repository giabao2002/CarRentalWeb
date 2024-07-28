import React from "react";

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  DialogActions,
  Autocomplete,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Grid
} from "@mui/material";

import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { formatDistance } from "date-fns";

import {
  FmdGood,
  DateRange,
  Search,
  Close,
  LocationOn,
} from "@mui/icons-material";

const style = {
  backgroundColor: "transparent",
  color: "black",
  boxShadow: "none",
  ":hover": {
    color: "#5ACDAB",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  borderRadius: 0,
  textTransform: "none",
};


export default function SearchCar() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [pickupDate, setPickupDate] = React.useState(new Date());
  const [returnDate, setReturnDate] = React.useState(new Date());
  const [pickupTime, setPickupTime] = React.useState(new Date());
  const [returnTime, setReturnTime] = React.useState(new Date());

  const calculateDuration = () => {
    const pickupDateTime = new Date(pickupDate);
    pickupDateTime.setHours(pickupTime.getHours());
    pickupDateTime.setMinutes(pickupTime.getMinutes());

    const returnDateTime = new Date(returnDate);
    returnDateTime.setHours(returnTime.getHours());
    returnDateTime.setMinutes(returnTime.getMinutes());

    return formatDistance(pickupDateTime, returnDateTime, { addSuffix: false });
  };

  const locations = [];

  const handleClickOpen = (val) => {
    setOpen(true);
    setSelectedValue(val);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedValue(null);
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <Box width="60%" bgcolor="white" p={2} borderRadius={2}>
      <Button
        onClick={() => handleClickOpen("location")}
        variant="contained"
        sx={{ ...style, width: "40%", borderRight: "1px solid gray" }}
      >
        <FmdGood sx={{ marginRight: 1, color: "#5ACDAB" }} />
        Chọn địa điểm
      </Button>
      <Button
        variant="contained"
        sx={{ ...style, width: "40%" }}
        onClick={() => handleClickOpen("time")}
      >
        <DateRange sx={{ marginRight: 1, color: "#5ACDAB" }} />
        Thời gian thuê xe
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5ACDAB",
          width: "20%",
          ":hover": {
            backgroundColor: "transparent",
            color: "#5ACDAB",
            border: "1px solid #5ACDAB",
            boxShadow: "none",
          },
        }}
      >
        <Search
          sx={{
            marginRight: 1,
          }}
        />
        Tìm xe
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle textAlign={"center"} fontWeight={"bold"}>
          {selectedValue === "location" ? "Địa điểm tìm xe" : "Thời gian thuê"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>
        <DialogContent>
          <FormControl fullWidth sx={{ marginTop: "10px", width: "30vw" }}>
            {selectedValue === "location" ? (
              <Autocomplete
                options={locations}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Địa điểm tìm xe"
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ color: "#5ACDAB" }}
                        >
                          <LocationOn />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    <LocationOn sx={{ mr: 2, color: "#5ACDAB" }} />
                    <Typography variant="body2">{option.title}</Typography>
                  </Box>
                )}
                onChange={handleChange}
              />
            ) : (
              <Box>
                <Typography variant="body2" color="textSecondary" gutterBottom mb={3}>
                  Tiết kiệm đến 50% nếu chọn 4h, 8h, 12h, 24h bắt đầu từ lúc
                  nhận xe, nhận và trả xe 24/24
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        label="Ngày nhận xe"
                        value={pickupDate}
                        onChange={(newValue) => setPickupDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TimePicker
                        label="Giờ nhận xe"
                        value={pickupTime}
                        onChange={(newValue) => setPickupTime(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        label="Ngày trả xe"
                        value={returnDate}
                        onChange={(newValue) => setReturnDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TimePicker
                        label="Giờ trả xe"
                        value={returnTime}
                        onChange={(newValue) => setReturnTime(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </LocalizationProvider>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1">
                    Thời gian thuê: {calculateDuration()}
                  </Typography>
                </Box>
              </Box>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              backgroundColor: "#5ACDAB",
              ":hover": {
                backgroundColor: "transparent",
                color: "#5ACDAB",
                border: "1px solid #5ACDAB",
                boxShadow: "none",
              },
            }}
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
