//In Postman: localhost:8000/api/auth/register
import authService from "../services/auth.service.js"
import jwt from "../utils/jwt.js"

const register = async (req, res) => {
    const input = req.body;
    try {
        if (!input) {
            throw {
                message: "Invalid Data."
            };
        }
        const user = await authService.register(input);
        const token = jwt.createToken(user);
        res.cookie("authToken", token, {
            maxAge: 86400 * 1000
        })
        res.json({ ...user, token });
    } catch (error) {
        res.status(error.status || 400).send(error.message);
    }
};

const login = async (req, res) => {
    const input = req.body;
    try {
        if (!input) {
            throw {
                message: "Invalid Data"
            }
        }
        const user = await authService.login(input);
        const token = jwt.createToken(user);

        res.cookie("authToken", token, {
            maxAge: 86400 * 1000
        })
        res.json({ ...user, token });
    } catch (error) {
        res.status(error.status || 400).send(error.message);
    }
};

export default { register, login };