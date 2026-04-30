import MenuItem from "../models/MenuItem.js";

const getAllMenuItems = async () => {
    const MenuItems = await MenuItem.find();
    return MenuItems;
};

const getMenuItemById = async (id) => {
    const EachItem = await MenuItem.findById(id)
    return EachItem;
};

const createMenuItem = async (data, userId) => {
    return await MenuItem.create({ ...data, createdBy: userId });
};

const updateMenuItem = async (id, input) => {
    return await MenuItem.findByIdAndUpdate(id, input, { new: true });
};

const deleteMenuItem = async (id) => {
    return await MenuItem.findByIdAndDelete(id);
};

export default { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem };