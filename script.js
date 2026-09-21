
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
        top: 0,
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

    const whatsappNumber = "917396960373";

    const whatsappMessage =
        `*Krishna Cafe - Job Application*%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Position:* ${position}%0A` +
        `*Experience:* ${experience}%0A` +
        `*Message:* ${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    this.reset();
    closeApplication();
});


/* ========================================
   REVIEW FORM
======================================== */

function openReviewForm() {
    document.getElementById("reviewBox").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeReviewForm() {
    document.getElementById("reviewBox").style.display = "none";
    document.body.style.overflow = "auto";
}


/* ========================================
   SUBMIT REVIEW
======================================== */

document.getElementById("reviewForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("reviewName").value;
    const rating = document.getElementById("reviewRating").value;
    const message = document.getElementById("reviewMessage").value;

    try {
        const response = await fetch("http://localhost:5000/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                rating: Number(rating),
                message: message
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Thank you for your review! ⭐");

            document.getElementById("reviewForm").reset();
            closeReviewForm();
            loadReviews();
        } else {
            alert(data.message || "Failed to submit review.");
        }

    } catch (error) {
        console.error(error);
        alert("Could not connect to the server.");
    }
});


/* ========================================
   LOAD REVIEWS
======================================== */

async function loadReviews() {
    try {
        const response = await fetch("http://localhost:5000/api/reviews");
        const reviews = await response.json();

        const container = document.querySelector(".reviews-container");

        container.innerHTML = "";

        reviews.forEach(review => {
            const stars = "⭐".repeat(review.rating);

            const card = document.createElement("div");

            card.className = "review-card";

            card.innerHTML = `
                <div class="review-stars">
                    ${stars}
                </div>

                <p>
                    "${review.message}"
                </p>

                <h3>${review.name}</h3>

                <span>Customer</span>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to load reviews:", error);
    }
}

loadReviews();