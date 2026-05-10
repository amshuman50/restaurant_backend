import jwt from "../utils/jwt.js"

const auth = (req, res, next) => {
    const cookie = req.headers.cookie;
    if (!cookie) return res.status(401).send("Cookies not Found.")

    const token = cookie.split("=")[1];
    if (!token) return res.status(401).send("Token not Found.")

    try {
        const data = jwt.verifyToken(token);
        req.user = data;
        next();
    }catch(erorr){
        res.status(401).send("Invalid Token");
    }
};

export default auth;