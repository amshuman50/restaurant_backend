import UserSchema from "../models/User.js"
import uploadFile from "../utils/fileUploader.js";

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

const updateProfileImage = async (id, file) => {
    const uploadedFiles = await uploadFile([file]);
    return await UserSchema.findByIdAndUpdate(
        id,
        {
            profileImageUrl: uploadedFiles[0].url
        },
        { new: true }
    )
}

export default { createUser, getAllUsers, getUserById, updateUser, deleteUser, updateProfileImage }