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

const login = async (data) => {
    const user = await User.findOne({
        $or: [{ email: data?.email }, { phone: data?.phone }]
    });
    if (!user) {
        throw {
            status: 400,
            message: "User not found."
        };
    }

    const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordMatch) {
        throw {
            status: 400,
            message: "Password do not match."
        }
    }

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
}

export default { register, login };