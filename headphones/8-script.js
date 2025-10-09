// 8-script.js
document.addEventListener("DOMContentLoaded", function () {
  // Select form and feedback div
  const form = document.querySelector(".contact-form"); // ✅ match your HTML
  const feedbackDiv = document.createElement("div");
  feedbackDiv.id = "form-feedback";
  feedbackDiv.style.display = "none";
  feedbackDiv.style.padding = "10px";
  feedbackDiv.style.marginTop = "15px";
  feedbackDiv.style.borderRadius = "8px";
  feedbackDiv.style.transition = "all 0.4s ease";
  form.appendChild(feedbackDiv);

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop actual submission

    // Retrieve and trim input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const message = document.getElementById("message").value.trim();

    // Initialize validation
    let isValid = true;
    let messages = [];

    // Name validation
    if (name.length < 3) {
      isValid = false;
      messages.push("Name must be at least 3 characters long.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Message validation
    if (message.length === 0) {
      isValid = false;
      messages.push("Please enter a message before submitting.");
    }

    // Display feedback
    feedbackDiv.style.display = "block";
    feedbackDiv.innerHTML = ""; // clear previous messages

    if (isValid) {
  feedbackDiv.textContent = "✅ Message sent successfully!";
  feedbackDiv.className = "success";  // ✅ add CSS class instead
  form.reset();
  setTimeout(() => feedbackDiv.style.display = "none", 4000);
} else {
  feedbackDiv.innerHTML = messages.join("<br>");
  feedbackDiv.className = "error";  // ✅ add CSS class instead
}
feedbackDiv.style.display = "block";

  });
});

// ========== 1️⃣ MOBILE NAV TOGGLE ==========
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("show");
});


// ========== 2️⃣ SMOOTH SCROLLING ==========
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close menu after clicking (mobile)
    menuToggle.classList.remove("active");
    navLinks.classList.remove("show");
  });
});


// ========== 3️⃣ SCROLL-REVEAL ANIMATIONS ==========
const revealElements = document.querySelectorAll(
  ".service, .pentagon, .contact-form"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ========== 4️⃣ BUTTON INTERACTION ==========
document.querySelectorAll(".cta-btn, .btn-submit").forEach(button => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "scale(0.95)";
  });
  button.addEventListener("mouseup", () => {
    button.style.transform = "scale(1)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});


// ========== 5️⃣ OPTIONAL: SCROLL-TO-TOP FEATURE ==========
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.classList.add("scroll-top");
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 500 ? "block" : "none";
});
