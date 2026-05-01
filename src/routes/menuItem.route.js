import express from "express";
import menuItemController from "../controlers/menuItem.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN } from "../constants/roles.js"
import validate from "../middlewares/validator.js";
import { menuItemSchema } from "../libs/schemas/menuItem.schema.js";

const router = express.Router();

router.get("/", menuItemController.getAllMenuItems);
router.get("/:id", menuItemController.getMenuItemById);
router.post("/", auth, roleBasedAuth(ROLE_ADMIN), validate(menuItemSchema), menuItemController.createMenuItem);
router.put("/:id", auth, roleBasedAuth(ROLE_ADMIN), menuItemController.updateMenuItem);
router.delete("/:id", auth, roleBasedAuth(ROLE_ADMIN), menuItemController.deleteMenuItem);

export default router;