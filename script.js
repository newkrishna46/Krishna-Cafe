// ANALYTICS
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag === "function") {
        gtag("event", eventName, parameters);
    }
}
/* ========================================
   MOBILE MENU TOGGLE
======================================== */

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.style.display =
        menu.style.display === "block"
            ? "none"
            : "block";
}


/* ========================================
   GALLERY SLIDER
======================================== */

const track = document.getElementById("galleryTrack");
const dots = document.querySelectorAll(".dot");

let index = 0;

function moveGallery() {
    const cards = document.querySelectorAll(".gallery-card");

    index = (index + 1) % cards.length;

    const width = cards[0].offsetWidth + 15;

    track.style.transform =
        `translateX(-${index * width}px)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

setInterval(moveGallery, 3000);


/* ========================================
   NAVIGATION ACTIVE LINK
======================================== */

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


/* ========================================
   CLOSE MOBILE MENU
======================================== */

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").style.display = "none";
    });
});

// ========================================
// WHY CHOOSE US SECTION
// ========================================

const whySlider = document.getElementById("whySlider");
const whyLeft = document.querySelector(".why-left");
const whyRight = document.querySelector(".why-right");

function updateWhyArrows() {

    // Hide arrows on desktop
    if (window.innerWidth > 600) {
        whyLeft.style.display = "none";
        whyRight.style.display = "none";
        return;
    }

    const maxScroll =
        whySlider.scrollWidth - whySlider.clientWidth;

    if (whySlider.scrollLeft <= 5) {

        // Beginning
        whyLeft.style.display = "none";
        whyRight.style.display = "flex";

    } else if (whySlider.scrollLeft >= maxScroll - 5) {

        // End
        whyLeft.style.display = "flex";
        whyRight.style.display = "none";

    } else {

        // Middle
        whyLeft.style.display = "flex";
        whyRight.style.display = "flex";
    }
}


function scrollWhyRight() {

    whySlider.scrollBy({
        left: 190,
        behavior: "smooth"
    });
}


function scrollWhyLeft() {

    whySlider.scrollBy({
        left: -190,
        behavior: "smooth"
    });
}


whySlider.addEventListener("scroll", updateWhyArrows);

window.addEventListener("load", updateWhyArrows);

window.addEventListener("resize", updateWhyArrows);
/* ========================================
   SHOW MENU ITEMS
======================================== */

function showMenu(type) {
    const menuSections = [
        "teaMenu",
        "coffeeMenu",
        "maltedMenu",
        "snacksMenu",
        "biscuitsMenu",
        "drinksMenu"
    ];

    menuSections.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    const menu = document.getElementById(type + "Menu");

    if (menu) {
        menu.style.display = "block";

        menu.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ========================================
// MENU SIDE SCROLL
// ========================================

const menuSlider = document.getElementById("menuSlider");
const rightArrow = document.querySelector(".menu-right");
const leftArrow = document.querySelector(".menu-left");


function updateMenuArrows() {

    // Hide arrows on desktop
    if (window.innerWidth > 600) {
        leftArrow.style.display = "none";
        rightArrow.style.display = "none";
        return;
    }

    const maxScroll =
        menuSlider.scrollWidth - menuSlider.clientWidth;


    if (menuSlider.scrollLeft <= 5) {

        // Beginning
        leftArrow.style.display = "none";
        rightArrow.style.display = "flex";

    }

    else if (menuSlider.scrollLeft >= maxScroll - 5) {

        // End
        rightArrow.style.display = "none";
        leftArrow.style.display = "flex";

    }

    else {

        // Middle
        rightArrow.style.display = "flex";
        leftArrow.style.display = "flex";
    }
}


function scrollMenuRight() {

    menuSlider.scrollBy({
        left: 190,
        behavior: "smooth"
    });
}


function scrollMenuLeft() {

    menuSlider.scrollBy({
        left: -190,
        behavior: "smooth"
    });
}


menuSlider.addEventListener("scroll", updateMenuArrows);

window.addEventListener("load", updateMenuArrows);

window.addEventListener("resize", updateMenuArrows);
/* ========================================
   CLOSE MENU ITEMS
======================================== */

function closeMenu() {
    const menuSections = [
        "teaMenu",
        "coffeeMenu",
        "maltedMenu",
        "snacksMenu",
        "biscuitsMenu",
        "drinksMenu"
    ];

    menuSections.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    window.scrollTo({
        behavior: "smooth"
    });
}


/* ========================================
   CAREERS
======================================== */

function openCareers() {
    document.getElementById("careersPage").style.display = "block";
    document.querySelector(".careers-section").style.display = "none";

    window.scrollTo({
        behavior: "smooth"
    });
}

function closeCareers() {
    document.getElementById("careersPage").style.display = "none";
    document.querySelector(".careers-section").style.display = "block";

    document.querySelector(".careers-section").scrollIntoView({
        behavior: "smooth"
    });
}


/* ========================================
   APPLICATION FORM
======================================== */

function openApplication(position) {
    document.getElementById("applicationBox").style.display = "flex";
    document.getElementById("appPosition").value = position;

    document.body.style.overflow = "hidden";
}

function closeApplication() {
    document.getElementById("applicationBox").style.display = "none";
    document.body.style.overflow = "auto";
}

/* ========================================
   WHATSAPP JOB APPLICATION
======================================== */

document.getElementById("jobForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("appName").value;
    const phone = document.getElementById("appPhone").value;
    const position = document.getElementById("appPosition").value;
    const experience = document.getElementById("appExperience").value;
    const message = document.getElementById("appMessage").value;

    const whatsappNumber = "919292353513";

    const whatsappMessage =
        `*Krishna Cafe - Job Application*\n\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Position:* ${position}\n` +
        `*Experience:* ${experience}\n` +
        `*Message:* ${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    /* Open WhatsApp ONLY after Submit */
    window.location.href= whatsappURL;

    this.reset();
    closeApplication();

});

/* ================================
   REVIEW VARIABLES
================================ */

let allReviews = [];
let showingAllReviews = false;


/* ================================
   OPEN REVIEW FORM
================================ */

function openReviewForm() {
    document.getElementById("reviewBox").style.display = "block";
    document.body.style.overflow = "hidden";
}


/* ================================
   CLOSE REVIEW FORM
================================ */

function closeReviewForm() {
    document.getElementById("reviewBox").style.display = "none";
    document.body.style.overflow = "auto";
}


/* ================================
   SUBMIT REVIEW
================================ */

document.getElementById("reviewForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const rating = Number(document.getElementById("reviewRating").value);
    const message = document.getElementById("reviewMessage").value.trim();

    try {

        const response = await fetch(
            "https://krishna-cafe-kanigiri.onrender.com/api/reviews",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    rating: rating,
                    message: message
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            trackEvent("review_submit", {
                rating: rating
            });

            alert("Thank you for your review! ⭐");

            document.getElementById("reviewForm").reset();

            closeReviewForm();

            showingAllReviews = false;

            loadReviews();

        } else {

            alert(data.message || "Failed to submit review.");

        }

    } catch (error) {

        console.error("Review submission error:", error);

        alert("Could not connect to the server.");

    }

});


/* ================================
   LOAD REVIEWS
================================ */

async function loadReviews() {

    try {

        const response = await fetch(
            "https://krishna-cafe-kanigiri.onrender.com/api/reviews"
        );

        if (!response.ok) {
            throw new Error("Failed to load reviews");
        }

        allReviews = await response.json();

        renderReviews();

    } catch (error) {

        console.error("Failed to load reviews:", error);

    }

}
/* ================================
   DISPLAY REVIEWS
================================ */

function renderReviews() {

    const container = document.getElementById("reviewsContainer");
    const viewMoreButton = document.getElementById("viewMoreReviews");

    container.innerHTML = "";

    const reviewsToShow = showingAllReviews
        ? allReviews
        : allReviews.slice(0, 2);

    const likedReviews =
        JSON.parse(localStorage.getItem("likedReviews")) || [];


    reviewsToShow.forEach(review => {

        const card = document.createElement("div");

        card.className = "review-card";


        /* ================================
           REVIEW HEADER
        ================================= */

        const header = document.createElement("div");

        header.className = "review-header";


        /* USER */

        const user = document.createElement("div");

        user.className = "review-user";


        const icon = document.createElement("i");

        icon.className = "fa-solid fa-user";


        const name = document.createElement("h3");

        name.textContent = review.name;


        user.appendChild(icon);
        user.appendChild(name);


        /* DATE + TIME */

        const time = document.createElement("small");

        time.className = "review-time";

        const reviewDate = new Date(review.createdAt);

        const date = reviewDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        const clock = reviewDate.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
        });

        time.innerHTML = `${date}<br>${clock}`;


        header.appendChild(user);
        header.appendChild(time);


        /* ================================
           RATING STARS
        ================================= */

        const stars = document.createElement("div");

        stars.className = "review-stars";

        stars.textContent = "⭐".repeat(review.rating);


        /* ================================
           REVIEW MESSAGE
        ================================= */

        const message = document.createElement("p");

        message.className = "review-message";

        message.textContent = `"${review.message}"`;


        /* ================================
           LIKE AREA
        ================================= */

        const likeArea = document.createElement("div");

        likeArea.className = "review-like";


        const likeButton = document.createElement("button");

        likeButton.className = "like-review-btn";


        const likeCount = document.createElement("span");

        likeCount.className = "like-count";

        likeCount.textContent = review.likes || 0;


        /* ================================
           CHECK DEVICE LIKE
        ================================= */

        const alreadyLiked = likedReviews.includes(review._id);


        if (alreadyLiked) {

            likeButton.classList.add("liked");

            likeButton.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <span>Liked</span>
            `;

            likeButton.disabled = true;

        } else {

            likeButton.innerHTML = `
                <i class="fa-regular fa-heart"></i>
                <span>Like</span>
            `;

            likeButton.addEventListener("click", function() {

                likeReview(
                    review._id,
                    likeButton,
                    likeCount
                );

            });

        }


        likeArea.appendChild(likeButton);
        likeArea.appendChild(likeCount);


        /* ================================
           ADD EVERYTHING TO CARD
        ================================= */

        card.appendChild(header);
        card.appendChild(stars);
        card.appendChild(message);
        card.appendChild(likeArea);

        container.appendChild(card);

    });


    /* ================================
       VIEW ALL REVIEWS BUTTON
    ================================= */

    if (allReviews.length > 2) {

        viewMoreButton.style.display = "inline-block";

        viewMoreButton.textContent = showingAllReviews
            ? "Show Less"
            : "View All Reviews";

    } else {

        viewMoreButton.style.display = "none";

    }

}


/* ================================
   LIKE REVIEW
================================ */

async function likeReview(reviewId, button, countElement) {

    const likedReviews =
        JSON.parse(localStorage.getItem("likedReviews")) || [];


    /* ================================
       PREVENT SECOND LIKE
    ================================= */

    if (likedReviews.includes(reviewId)) {
        return;
    }


    try {

        const response = await fetch(
            `https://krishna-cafe-kanigiri.onrender.com/api/reviews/${reviewId}/like`,
            {
                method: "PATCH"
            }
        );


        const data = await response.json();


        if (response.ok) {

            /* ================================
               SAVE LIKE ON THIS DEVICE
            ================================= */

            likedReviews.push(reviewId);

            localStorage.setItem(
                "likedReviews",
                JSON.stringify(likedReviews)
            );


            /* ================================
               UPDATE LIKE COUNT
            ================================= */

            countElement.textContent = data.likes;


            /* ================================
               CHANGE BUTTON
            ================================= */

            button.classList.add("liked");

            button.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <span>Liked</span>
            `;

            button.disabled = true;


        } else {

            console.error(
                "Like failed:",
                data.message
            );

        }


    } catch (error) {

        console.error(
            "Like error:",
            error
        );

    }

}


/* ================================
   VIEW ALL / SHOW LESS
================================ */

function toggleReviews() {

    showingAllReviews = !showingAllReviews;

    renderReviews();

}


/* ================================
   LOAD REVIEWS ON PAGE LOAD
================================ */

loadReviews();