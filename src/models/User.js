import mongoose, { Mongoose } from "mongoose";

const UserSchema = new Mongoose.UserSchema({
    name: {
        type: String,
        required: [true, "Name is Required."],
        minLength: 3,
        maxLength: 50
    },
    phone: {
        type: Number,
        required: [true, "Phone number is required."],
        minLength: 6,
        maxLength: 13,
        unique: true
    },
    address: {
        country: {
            type: String,
            default: "Nepal"
        },
        province: {
            type: String,
            required: [true, "Province is required."]
        }
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        unique: true,
        validate: {
            validator: (value) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(value);
            },
            message: "Invalid Email Address."
        }
    },
    password: {
        tyoe: String,
        required: [true, "Password is required"],
        minLength: [6, "Password length must be greater than 6."]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        tyoe: Date,
        default: Date.now()
    },
    roles: {
        type: [String],
        enum: ["SUPER_ADMIN", "ADMIN", "STAFF", "CUSTOMER"],
        Default: ["CUSTOMER"]
    }
})