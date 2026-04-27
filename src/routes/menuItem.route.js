import express from "express";
import menuItemController from "../controlers/menuItem.controller.js";

const router = express.Router();

router.get("/", menuItemController.getAllMenuItems);
router.get("/:id", menuItemController.getMenuItemById);
router.post("/", menuItemController.createMenuItem);
router.put("/:id", menuItemController.updateMenuItem);
router.delete("/:id", menuItemController.deleteMenuItem);

export default router;