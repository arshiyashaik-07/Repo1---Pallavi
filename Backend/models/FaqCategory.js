const mongoose = require('mongoose');

const FaqCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('FaqCategory', FaqCategorySchema);