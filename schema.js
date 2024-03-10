const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb://localhost:27017/magesDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);



const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
    id: Number,
    name: String,
    desc: String,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});

const productInventorySchema = new Schema({
    id: Number,
    quantity: Number,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});

const discountSchema = new Schema({
    id: Number,
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});

const productSchema = new Schema({
    id: Number,
    name: String,
    desc: String,
    SKU: String,
    category_id: { type: Number, ref: 'ProductCategory' },
    inventory_id: { type: Number, ref: 'ProductInventory' },
    price: Number,
    discount_id: { type: Number, ref: 'Discount' },
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
});

module.exports = {
    ProductCategoryModel: mongoose.model('ProductCategory', productCategorySchema),
    ProductInventoryModel: mongoose.model('ProductInventory', productInventorySchema),
    DiscountModel: mongoose.model('Discount', discountSchema),
    ProductModel: mongoose.model('Product', productSchema)
};
