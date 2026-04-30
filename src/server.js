import express from "express";
import config from "./config/config.js";
import menuItemRoute from "./routes/menuItem.route.js"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";

const app = express();
connectDB();
app.use(express.json());
app.use(logger)

app.get("/", (req, res) => {
    res.send("Home Page.")
})

app.get("/about", (req, res) => {
    res.send("About Page.")
})

app.use("/api/menuItem", menuItemRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute)

app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
})