import express, {json, urlencoded } from "express";
import cors from "cors";
import routers from "./routers/routers.js";

const app = express();

let corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));


// simple route
app.use("/", routers);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});