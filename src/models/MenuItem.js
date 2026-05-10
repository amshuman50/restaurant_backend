import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must me Greater than 0."],
        max: [100000, "Price must be less or equal to 100000"]
    },
    veg: Boolean,
    isAvailable: {
        type: Boolean,
        default: true
    }
})

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    variants: [VariantSchema],
    price: {
        type: Number,
        min: [0.01, "Price must me Greater than 0."],
        max: [100000, "Price must be less or equal to 100000"]
    },
    veg: Boolean,
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Created by user id is required."]
    },
    imageUrls: {
        type: [String]
    }
});

export default mongoose.model("MenuItem", MenuItemSchema);