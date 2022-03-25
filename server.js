import express from "express";
import bodyParser from "body-parser";
import accountRoute from "./Routes/AccountRoutes.js";
import userInfoRoute from "./Routes/UserInfoRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is the server");
});
app.use("/account", accountRoute);
app.use("/userinfo", userInfoRoute);

app.listen(port, () =>
  console.log(`Server is Running on port: http://localhost:${port}`)
);
