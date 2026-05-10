import MenuItem from "../models/MenuItem.js";
import uploadFile from "../utils/fileUploader.js";

const getAllMenuItems = async (query) => {
    // const MenuItems = await MenuItem.find();
    const sort = query.sort ? JSON.parse(query.sort) : {};
    const limit = query.limit ?? 10;
    const offset = query.offset ?? 0;

    const filters = {};
    const { name, category, veg, isAvailable, createdBy, variantName } = query;

    if (name) filters.name = { $regex: name, $options: "i" };
    if (category) filters.category = category;
    if (createdBy) filters.createdBy = createdBy;
    if (veg !== undefined) filters.veg = veg === "true";
    if (isAvailable !== undefined) filters.isAvailable = isAvailable === "true";

    if (variantName) filters["variants.name"] = { $regex: variantName, $options: "i" };

    const MenuItems = await MenuItem.find(filters).sort(sort).limit(limit).skip(offset)

    return MenuItems;
};

const getMenuItemById = async (id) => {
    const EachItem = await MenuItem.findById(id)
    return EachItem;
};

const createMenuItem = async (data, files, userId) => {
    const uploadFiles = await uploadFile(files)
    return await MenuItem.create({
        ...data,
        imageUrls: uploadFiles.map((file) => file.url),
        createdBy: userId
    });
};

const updateMenuItem = async (id, input, files) => {
    const updateData = input;
    if (files && files.length > 0) {
        const uploadedFiles = await uploadFile(files);
        updateData.imageUrls = uploadedFiles.map((file) => file.url);
    }
    return await MenuItem.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteMenuItem = async (id) => {
    return await MenuItem.findByIdAndDelete(id);
};

const getCategory = async () => {
    return await MenuItem.distinct("category");
};

// const getVeg = async () => {
//     return await MenuItem.distinct("veg");
// };

// const getAvailable = async () => {
//     return await MenuItem.distinct("isAvailable");
// }

const getTotalCount = async () => {
    return await MenuItem.countDocuments();
}

// export default { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem, getCategory, getTotalCount, getVeg, getAvailable };
export default { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem, getCategory, getTotalCount };