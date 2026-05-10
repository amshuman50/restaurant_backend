import menuItemService from "../services/menuItem.service.js";

const getAllMenuItems = async (req, res) => {

    //Retrieving cookie from browser and displaying it in colsole.log()
    /*const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    console.log(token);*/

    const menuItems = await menuItemService.getAllMenuItems(req.query);
    res.json(menuItems);
};

const getMenuItemById = async (req, res) => {
    const id = req.params.id;
    const menuItem = await menuItemService.getMenuItemById(id);
    if (!menuItem) return res.status(404).json({ message: "Item not found" })
    res.json(menuItem)
};

const createMenuItem = async (req, res) => {
    const userId = req.user._id;
    try {
        const menuItem = await menuItemService.createMenuItem(req.body, req.files, userId);
        res.json(menuItem);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateMenuItem = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const menuItem = await menuItemService.updateMenuItem(id, input, req.files);
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
};

const getCategory = async (req, res) => {
    const category = await menuItemService.getCategory();
    res.json(category);
}

// const getVeg = async (req, res) => {
//     const veg = await menuItemService.getVeg();
//     res.json(veg);
// };

// const getAvailable = async (req, res) => {
//     const available = await menuItemService.getAvailable();
//     res.json(available);
// };

const getTotalCount = async (req, res) => {
    const count = await menuItemService.getTotalCount();
    res.json(count);
};

// export default { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem, getCategory, getTotalCount, getVeg, getAvailable }
export default { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem, getCategory, getTotalCount }