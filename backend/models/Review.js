const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        message: {
            type: String,
            required: true,
            trim: true
        },

        likes: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Review", reviewSchema);