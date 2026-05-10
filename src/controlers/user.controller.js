import userService from "../services/user.service.js";

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    res.json(user);
};

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const user = await userService.updateUser(id, input);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await userService.deleteUser(id);
        res.json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(400).send(message.error);
    }
}

const updateProfileImage = async (req, res) => {
    try {
        const user = await userService.updateProfileImage(req.user._id, req.file);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser, updateProfileImage }