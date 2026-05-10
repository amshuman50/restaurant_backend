import express from "express";
import config from "./config/config.js";
import menuItemRoute from "./routes/menuItem.route.js"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
import cors from "cors";
import multer from "multer";
import connectCloudinary from "./config/cloudinary.js";

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

connectDB();
connectCloudinary();

app.use(express.json());
app.use(logger);
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        status: "ok",
        version: "0.1.0",
        port: config.port
    })
})

app.get("/about", (req, res) => {
    res.send("About Page.")
})

app.use("/api/menuItem", upload.array("images", 5), menuItemRoute);
app.use("/api/user", upload.single("image"), auth, userRoute);
app.use("/api/auth", authRoute)

app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
})