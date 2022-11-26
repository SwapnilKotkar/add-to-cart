import mongoose, { Mongoose } from "mongoose";

const productSchema = mongoose.Schema({
    Handle: String,
    Title: String,
    Body: String,
    Vendor: String,
    Type: String,
    Tags: [String],
    option1_Name: String,
    option1_Value: String,
    option2_Name: String,
    option2_Value: String,
    option3_Name: String,
    Variant_SKU: String,
    Variant_Grams: Number,
    Variant_Inventory_Tracker: String,
    Variant_Inventory_Qty: Number,
    Variant_Inventory_Policy: String,
    Variant_Fulfillment_Service: String,
    Variant_Price: Number,
    Variant_Compare_At_Price: String,
    Image_Src: String,
    CreatedAt: { type: Date, default: new Date() }
})

const Products = mongoose.models.PRODUCTS || mongoose.model('PRODUCTS', productSchema);

export default Products;