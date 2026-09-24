const express = require("express");
const Review = require("../models/Review");

const router = express.Router();


/* ================================
   GET REVIEWS
================================ */

router.get("/", async (req, res) => {

    try {

        const reviews = await Review
            .find()
            .sort({ createdAt: -1 });

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            message: "Failed to get reviews"
        });

    }

});


/* ================================
   POST REVIEW
================================ */

router.post("/", async (req, res) => {

    try {

        const {
            name,
            rating,
            message
        } = req.body;

        if (!name || !rating || !message) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }

        const review = new Review({
            name,
            rating,
            message,
            likes: 0
        });

        const savedReview = await review.save();

        res.status(201).json(savedReview);

    } catch (error) {

        res.status(500).json({
            message: "Failed to save review"
        });

    }

});


/* ================================
   LIKE REVIEW
================================ */

router.patch("/:id/like", async (req, res) => {

    try {

        const review = await Review.findByIdAndUpdate(
            req.params.id,
            {
                $inc: {
                    likes: 1
                }
            },
            {
                new: true
            }
        );

        if (!review) {

            return res.status(404).json({
                message: "Review not found"
            });

        }

        res.json({
            likes: review.likes
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to like review"
        });

    }

});


module.exports = router;