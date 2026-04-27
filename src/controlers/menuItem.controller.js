import menuItemService from "../services/menuItem.service.js";

const getAllMenuItems = async (req, res) => {
    const menuItems = await menuItemService.getAllMenuItems();
    res.json(menuItems);
};

const getMenuItemById = async (req, res) => {
    const id = req.params.id;
    const menuItem = await menuItemService.getMenuItemById(id);
    if (!menuItem) return res.status(404).json({ message: "Item not found" })
    res.json(menuItem)
};

const createMenuItem = async (req, res) => {
    try {
        const menuItem = await menuItemService.createMenuItem(req.body);
        res.json(menuItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateMenuItem = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const menuItem = await menuItemService.updateMenuItem(id, input);
        res.json(menuItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteMenuItem = async (req, res) => {
    const id = req.params.id;
    try {
        await menuItemService.deleteMenuItem(id);
        res.json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem }