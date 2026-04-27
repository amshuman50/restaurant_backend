import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 1234,
    mongodbUrl: process.env.MONGOBD_URL || ""
};

export default config;