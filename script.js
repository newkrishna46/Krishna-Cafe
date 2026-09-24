/* ========================================
   ANALYTICS
======================================== */

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

    if (!menu) return;

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

    if (!track) return;

    const cards =
        document.querySelectorAll(".gallery-card");

    if (!cards.length) return;

    index = (index + 1) % cards.length;

    const width =
        cards[0].offsetWidth + 15;

    track.style.transform =
        `translateX(-${index * width}px)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle(
            "active",
            i === index
        );
    });
}

if (track) {
    setInterval(moveGallery, 3000);
}


/* ========================================
   NAVIGATION ACTIVE LINK
======================================== */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelectorAll(".nav-link")
            .forEach(item => {
                item.classList.remove("active");
            });

        link.classList.add("active");

    });

});


/* ========================================
   CLOSE MOBILE MENU
======================================== */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            const menu =
                document.getElementById("mobileMenu");

            if (menu) {
                menu.style.display = "none";
            }

        });

    });


/* ========================================
   WHY CHOOSE US
======================================== */

const whySlider =
    document.getElementById("whySlider");

const whyLeft =
    document.querySelector(".why-left");

const whyRight =
    document.querySelector(".why-right");


function updateWhyArrows() {

    if (!whySlider) return;

    if (window.innerWidth > 600) {

        if (whyLeft) {
            whyLeft.style.display = "none";
        }

        if (whyRight) {
            whyRight.style.display = "none";
        }

        return;
    }


    const maxScroll =
        whySlider.scrollWidth -
        whySlider.clientWidth;


    if (whySlider.scrollLeft <= 5) {

        if (whyLeft) {
            whyLeft.style.display = "none";
        }

        if (whyRight) {
            whyRight.style.display = "flex";
        }

    } else if (
        whySlider.scrollLeft >= maxScroll - 5
    ) {

        if (whyLeft) {
            whyLeft.style.display = "flex";
        }

        if (whyRight) {
            whyRight.style.display = "none";
        }

    } else {

        if (whyLeft) {
            whyLeft.style.display = "flex";
        }

        if (whyRight) {
            whyRight.style.display = "flex";
        }

    }

}


function scrollWhyRight() {

    if (!whySlider) return;

    whySlider.scrollBy({
        left: 190,
        behavior: "smooth"
    });

}


function scrollWhyLeft() {

    if (!whySlider) return;

    whySlider.scrollBy({
        left: -190,
        behavior: "smooth"
    });

}


if (whySlider) {
    whySlider.addEventListener(
        "scroll",
        updateWhyArrows
    );
}

window.addEventListener(
    "load",
    updateWhyArrows
);

window.addEventListener(
    "resize",
    updateWhyArrows
);


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

        const section =
            document.getElementById(id);

        if (section) {
            section.style.display = "none";
        }

    });


    const menu =
        document.getElementById(type + "Menu");


    if (menu) {

        menu.style.display = "block";

        menu.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ========================================
   MENU SIDE SCROLL
======================================== */

const menuSlider =
    document.getElementById("menuSlider");

const rightArrow =
    document.querySelector(".menu-right");

const leftArrow =
    document.querySelector(".menu-left");


function updateMenuArrows() {

    if (!menuSlider) return;


    if (window.innerWidth > 600) {

        if (leftArrow) {
            leftArrow.style.display = "none";
        }

        if (rightArrow) {
            rightArrow.style.display = "none";
        }

        return;
    }


    const maxScroll =
        menuSlider.scrollWidth -
        menuSlider.clientWidth;


    if (menuSlider.scrollLeft <= 5) {

        if (leftArrow) {
            leftArrow.style.display = "none";
        }

        if (rightArrow) {
            rightArrow.style.display = "flex";
        }

    } else if (
        menuSlider.scrollLeft >= maxScroll - 5
    ) {

        if (rightArrow) {
            rightArrow.style.display = "none";
        }

        if (leftArrow) {
            leftArrow.style.display = "flex";
        }

    } else {

        if (rightArrow) {
            rightArrow.style.display = "flex";
        }

        if (leftArrow) {
            leftArrow.style.display = "flex";
        }

    }

}


function scrollMenuRight() {

    if (!menuSlider) return;

    menuSlider.scrollBy({
        left: 190,
        behavior: "smooth"
    });

}


function scrollMenuLeft() {

    if (!menuSlider) return;

    menuSlider.scrollBy({
        left: -190,
        behavior: "smooth"
    });

}


if (menuSlider) {
    menuSlider.addEventListener(
        "scroll",
        updateMenuArrows
    );
}

window.addEventListener(
    "load",
    updateMenuArrows
);

window.addEventListener(
    "resize",
    updateMenuArrows
);


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

        const section =
            document.getElementById(id);

        if (section) {
            section.style.display = "none";
        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ========================================
   CAREERS
======================================== */

function openCareers() {

    const careersPage =
        document.getElementById("careersPage");

    const careersSection =
        document.querySelector(".careers-section");


    if (careersPage) {
        careersPage.style.display = "block";
    }

    if (careersSection) {
        careersSection.style.display = "none";
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function closeCareers() {

    const careersPage =
        document.getElementById("careersPage");

    const careersSection =
        document.querySelector(".careers-section");


    if (careersPage) {
        careersPage.style.display = "none";
    }

    if (careersSection) {
        careersSection.style.display = "block";

        careersSection.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* ========================================
   APPLICATION FORM
======================================== */

function openApplication(position) {

    const applicationBox =
        document.getElementById("applicationBox");

    const appPosition =
        document.getElementById("appPosition");


    if (applicationBox) {
        applicationBox.style.display = "flex";
    }

    if (appPosition) {
        appPosition.value = position;
    }

    document.body.style.overflow = "hidden";

}


function closeApplication() {

    const applicationBox =
        document.getElementById("applicationBox");


    if (applicationBox) {
        applicationBox.style.display = "none";
    }

    document.body.style.overflow = "auto";

}


/* ========================================
   WHATSAPP JOB APPLICATION
======================================== */

const jobForm =
    document.getElementById("jobForm");


if (jobForm) {

    jobForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("appName").value;

            const phone =
                document.getElementById("appPhone").value;

            const position =
                document.getElementById("appPosition").value;

            const experience =
                document.getElementById("appExperience").value;

            const message =
                document.getElementById("appMessage").value;


            const whatsappNumber =
                "919292353513";


            const whatsappMessage =
                `*Krishna Cafe - Job Application*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n` +
                `*Position:* ${position}\n` +
                `*Experience:* ${experience}\n` +
                `*Message:* ${message}`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            window.location.href =
                whatsappURL;


            this.reset();

            closeApplication();

        }
    );

}


/* ========================================
   REVIEW VARIABLES
======================================== */

let allReviews = [];

let showingAllReviews = false;


/* ========================================
   OPEN REVIEW FORM
======================================== */

function openReviewForm() {

    const reviewBox =
        document.getElementById("reviewBox");


    if (!reviewBox) {

        console.error(
            "reviewBox element not found"
        );

        return;
    }


    reviewBox.style.display = "block";

    document.body.style.overflow = "hidden";

}


/* ========================================
   CLOSE REVIEW FORM
======================================== */

function closeReviewForm() {

    const reviewBox =
        document.getElementById("reviewBox");


    if (reviewBox) {
        reviewBox.style.display = "none";
    }

    document.body.style.overflow = "auto";

}


/* ========================================
   SUBMIT REVIEW
======================================== */

const reviewForm =
    document.getElementById("reviewForm");


if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const name =
                document.getElementById("reviewName")
                    .value
                    .trim();

            const rating =
                Number(
                    document.getElementById("reviewRating")
                        .value
                );

            const message =
                document.getElementById("reviewMessage")
                    .value
                    .trim();


            try {

                const response = await fetch(
                    "https://krishna-cafe-kanigiri.onrender.com/api/reviews",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            name: name,
                            rating: rating,
                            message: message
                        })
                    }
                );


                const data =
                    await response.json();


                if (response.ok) {

                    trackEvent(
                        "review_submit",
                        {
                            rating: rating
                        }
                    );


                    alert(
                        "Thank you for your review! ⭐"
                    );


                    reviewForm.reset();

                    closeReviewForm();


                    showingAllReviews = false;


                    await loadReviews();

                } else {

                    alert(
                        data.message ||
                        "Failed to submit review."
                    );

                }


            } catch (error) {

                console.error(
                    "Review submission error:",
                    error
                );


                alert(
                    "Could not connect to the server."
                );

            }

        }
    );

}


/* ========================================
   LOAD REVIEWS
======================================== */

async function loadReviews() {

    const container =
        document.getElementById(
            "reviewsContainer"
        );


    if (!container) {

        console.error(
            "reviewsContainer element not found"
        );

        return;
    }


    try {

        const response = await fetch(
            "https://krishna-cafe-kanigiri.onrender.com/api/reviews"
        );


        if (!response.ok) {

            throw new Error(
                "Failed to load reviews"
            );

        }


        allReviews =
            await response.json();


        renderReviews();


    } catch (error) {

        console.error(
            "Failed to load reviews:",
            error
        );

    }

}


/* ========================================
   DISPLAY REVIEWS
======================================== */

function renderReviews() {

    const container =
        document.getElementById(
            "reviewsContainer"
        );

    const viewMoreButton =
        document.getElementById(
            "viewMoreReviews"
        );


    if (!container) return;


    container.innerHTML = "";


    const reviewsToShow =
        showingAllReviews
            ? allReviews
            : allReviews.slice(0, 2);


    const likedReviews =
        JSON.parse(
            localStorage.getItem(
                "likedReviews"
            )
        ) || [];


    reviewsToShow.forEach(review => {

        const card =
            document.createElement("div");

        card.className =
            "review-card";


        /* REVIEW HEADER */

        const header =
            document.createElement("div");

        header.className =
            "review-header";


        /* USER */

        const user =
            document.createElement("div");

        user.className =
            "review-user";


        const icon =
            document.createElement("i");

        icon.className =
            "fa-solid fa-user";


        const name =
            document.createElement("h3");

        name.textContent =
            review.name;


        user.appendChild(icon);

        user.appendChild(name);


        /* DATE + TIME */

        const time =
            document.createElement("small");

        time.className =
            "review-time";


        const reviewDate =
            new Date(review.createdAt);


        const date =
            reviewDate.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );


        const clock =
            reviewDate.toLocaleTimeString(
                "en-IN",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        time.innerHTML =
            `${date}<br>${clock}`;


        header.appendChild(user);

        header.appendChild(time);


        /* RATING */

        const stars =
            document.createElement("div");

        stars.className =
            "review-stars";

        stars.textContent =
            "⭐".repeat(review.rating);


        /* MESSAGE */

        const message =
            document.createElement("p");

        message.className =
            "review-message";

        message.textContent =
            `"${review.message}"`;


        /* LIKE AREA */

        const likeArea =
            document.createElement("div");

        likeArea.className =
            "review-like";


        const likeButton =
            document.createElement("button");

        likeButton.className =
            "like-review-btn";


        const likeCount =
            document.createElement("span");

        likeCount.className =
            "like-count";

        likeCount.textContent =
            review.likes || 0;


        /* CHECK LIKE STATUS */

        const alreadyLiked =
            likedReviews.includes(
                review._id
            );


        if (alreadyLiked) {

            likeButton.classList.add(
                "liked"
            );

            likeButton.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <span>Liked</span>
            `;

        } else {

            likeButton.innerHTML = `
                <i class="fa-regular fa-heart"></i>
                <span>Like</span>
            `;

        }


        /* LIKE / DISLIKE */

        likeButton.addEventListener(
            "click",
            function() {

                likeReview(
                    review._id,
                    likeButton,
                    likeCount
                );

            }
        );


        likeArea.appendChild(
            likeButton
        );

        likeArea.appendChild(
            likeCount
        );


        /* ADD CARD */

        card.appendChild(header);

        card.appendChild(stars);

        card.appendChild(message);

        card.appendChild(likeArea);

        container.appendChild(card);

    });


    /* VIEW ALL BUTTON */

    if (
        viewMoreButton &&
        allReviews.length > 2
    ) {

        viewMoreButton.style.display =
            "inline-block";


        viewMoreButton.textContent =
            showingAllReviews
                ? "Show Less"
                : "View All Reviews";

    } else if (viewMoreButton) {

        viewMoreButton.style.display =
            "none";

    }

}

/* ========================================
   LIKE / DISLIKE REVIEW
======================================== */

async function likeReview(
    reviewId,
    button,
    countElement
) {
    // Prevent multiple clicks while request is processing
    if (button.disabled) {
        return;
    }

    const likedReviews =
        JSON.parse(
            localStorage.getItem("likedReviews")
        ) || [];

    const alreadyLiked =
        likedReviews.includes(reviewId);

    const action =
        alreadyLiked
            ? "unlike"
            : "like";

    // Lock button immediately
    button.disabled = true;

    try {
        const response = await fetch(
            `https://krishna-cafe-kanigiri.onrender.com/api/reviews/${reviewId}/like`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    action: action
                })
            }
        );

        const data =
            await response.json();

        if (!response.ok) {
            throw new Error(
                data.message ||
                "Like update failed"
            );
        }

        /* ================================
           LIKE
        ================================= */

        if (action === "like") {

            // Add only once
            if (!likedReviews.includes(reviewId)) {
                likedReviews.push(reviewId);
            }

            button.classList.add("liked");

            button.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                <span>Liked</span>
            `;
        }

        /* ================================
           UNLIKE
        ================================= */

        else {

            const position =
                likedReviews.indexOf(reviewId);

            if (position !== -1) {
                likedReviews.splice(
                    position,
                    1
                );
            }

            button.classList.remove("liked");

            button.innerHTML = `
                <i class="fa-regular fa-heart"></i>
                <span>Like</span>
            `;
        }

        /* ================================
           SAVE LIKE STATUS
        ================================= */

        localStorage.setItem(
            "likedReviews",
            JSON.stringify(likedReviews)
        );

        /* ================================
           UPDATE COUNT
        ================================= */

        countElement.textContent =
            data.likes;

    } catch (error) {

        console.error(
            "Like error:",
            error
        );

    } finally {

        // Enable button again
        button.disabled = false;
    }
}


/* ========================================
   VIEW ALL / SHOW LESS
======================================== */

function toggleReviews() {

    showingAllReviews =
        !showingAllReviews;

    renderReviews();

}


/* ========================================
   LOAD REVIEWS ON PAGE LOAD
======================================== */

loadReviews();