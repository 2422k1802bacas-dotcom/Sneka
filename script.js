// Welcome message
console.log("Welcome to Sneka's Portfolio 🚀");

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  alert("Thank you for contacting Sneka ✨ I will reply to you soon!");
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});