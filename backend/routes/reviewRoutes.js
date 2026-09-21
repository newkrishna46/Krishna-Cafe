const express = require("express");
const Review = require("../models/Review");

const router = express.Router();


// GET all reviews
router.get("/", async (req, res) => {

    try {

        const reviews = await Review.find()
            .sort({ createdAt: -1 });

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            message: "Failed to get reviews"
        });

    }

});


// POST a new review
router.post("/", async (req, res) => {

    try {

        const { name, rating, message } = req.body;

        if (!name || !rating || !message) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }

        const review = new Review({
            name,
            rating,
            message
        });

        const savedReview = await review.save();

        res.status(201).json(savedReview);

    } catch (error) {

        res.status(500).json({
            message: "Failed to save review"
        });

    }

});


module.exports = router;