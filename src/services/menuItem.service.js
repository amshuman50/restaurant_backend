import MenuItem from "../models/MenuItem.js";

const getAllMenuItems = async () => {
    const MenuItems = await MenuItem.find();
    return MenuItems;
};

const getMenuItemById = async (id) => {
    const MenuItem = await MenuItem.findById(id)
};

const createMenuItem = async (data) => {
    return await MenuItem.create(data);
};

const updateMenuItem = async (id, input) => {
    return await MenuItem.findByIdAndUpdate(id, input, { new: true });
};

const deleteMenuItem = async (id) => {
    return await MenuItem.findByIdAndDelete(id);
};

export default { getAllMenuItems, getAllMenuItems, createMenuItem, updateMenuItem, deleteMenuItem };