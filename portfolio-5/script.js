const parallaxImages = document.querySelectorAll(".parallax-image");
const featuresEl = document.querySelector(".features");
const featureEls = document.querySelectorAll(".feature");

// parallax scroll javascript
window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  parallaxImages.forEach((parallaxImage) => {
    const parallaxSpeed = parallaxImage.dataset.speed;
    const topPosition = -(scrollValue * parallaxSpeed) / 100;
    parallaxImage.style.transform = `translateY(${topPosition}px) scale(1.2)`;
  });
});

// skills glow javascript
featuresEl.addEventListener("pointermove", (ev) => {
  featureEls.forEach((featureEl) => {
    // Not optimized yet, I know
    const rect = featureEl.getBoundingClientRect();

    featureEl.style.setProperty("--x", ev.clientX - rect.left);
    featureEl.style.setProperty("--y", ev.clientY - rect.top);
  });
});