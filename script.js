// Loader

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Typing Animation

const textArray = [
    "BCA Student",
    "Aspiring Web Developer",
    "Software Developer"
];

let typingText = document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    if (charIndex < textArray[textIndex].length) {

        typingText.textContent += textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingText.textContent =
            textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= textArray.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (textArray.length) {
        setTimeout(typeEffect, 1000);
    }
});

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        document.body.style.background =
            "linear-gradient(135deg, #f1f5f9, #cbd5e1)";

        document.body.style.color = "black";

    } else {

        document.body.style.background =
            "linear-gradient(135deg, #0f172a, #1e293b)";

        document.body.style.color = "white";
    }
});

// Scroll Reveal Animation

const revealElements = document.querySelectorAll(".glass");

window.addEventListener("scroll", () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
});