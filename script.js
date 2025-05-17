
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;
  
  function showNextTestimonial() {
    testimonials.forEach((t) => t.classList.remove("active"));
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add("active");
  }
  
  setInterval(showNextTestimonial, 4000);
  