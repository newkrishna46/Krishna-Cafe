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

        console.error("Get reviews error:", error);

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
            name: name,
            rating: rating,
            message: message,
            likes: 0
        });


        const savedReview = await review.save();


        res.status(201).json(savedReview);

    } catch (error) {

        console.error("Save review error:", error);

        res.status(500).json({
            message: "Failed to save review"
        });

    }

});


/* ================================
   LIKE / DISLIKE REVIEW
================================ */

router.patch("/:id/like", async (req, res) => {

    try {

        const { action } = req.body;


        /* ================================
           CHECK ACTION
        ================================= */

        if (action !== "like" && action !== "unlike") {

            return res.status(400).json({
                message: "Invalid like action"
            });

        }


        /* ================================
           FIND REVIEW
        ================================= */

        const review = await Review.findById(
            req.params.id
        );


        if (!review) {

            return res.status(404).json({
                message: "Review not found"
            });

        }


        /* ================================
           UPDATE LIKE COUNT
        ================================= */

        if (action === "like") {

            review.likes += 1;

        } else {

            review.likes = Math.max(
                0,
                review.likes - 1
            );

        }


        /* ================================
           SAVE REVIEW
        ================================= */

        await review.save();


        /* ================================
           SEND UPDATED COUNT
        ================================= */

        res.json({
            likes: review.likes
        });

    } catch (error) {

        console.error(
            "Like update error:",
            error
        );

        res.status(500).json({
            message: "Failed to update like"
        });

    }

});


module.exports = router;