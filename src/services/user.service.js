import UserSchema from "../models/User.js"

const createUser = async (data) => {
    return await UserSchema.create(data);
};

const getAllUsers = async () => {
    const users = await UserSchema.find();
    return users;
}

const getUserById = async (id) => {
    const user = await UserSchema.findById(id);
    return user;
}

const updateUser = async (id, input) => {
    return await UserSchema.findByIdAndUpdate(id, input, { new: true });
}

const deleteUser = async (id) => {
    return await UserSchema.findByIdAndDelete(id);
}

export default { createUser, getAllUsers, getUserById, updateUser, deleteUser }