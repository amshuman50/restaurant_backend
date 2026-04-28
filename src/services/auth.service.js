//In Postman: localhost:8000/api/auth/register
import User from "../models/User.js"
import bcrypt from "bcrypt"

const register = async (data) => {
    const user = await User.findOne({
        $or: [{ email: data?.email }, { phone: data?.phone }]
    });
    if (user) {
        throw {
            status: 409,
            message: "Email or Phone Number Already Exists."
        };
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    return await User.create({
        ...data,
        password: hashedPassword
    });
};

export default {register}