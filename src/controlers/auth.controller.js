//In Postman: localhost:8000/api/auth/register
import authService from "../services/auth.service.js"

const register = async (req, res) => {
    const input = req.body;
    console.log(input);
    try {
        if (!input) {
            console.log(input);
            throw {
                message: "Invalid Data."
            };
        }
        const user = await authService.register(input);
        res.json(user);
    } catch (error) {
        res.status(error.status || 400).send(error.message);
    }
}

export default { register }