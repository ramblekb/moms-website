const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;