
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".port-item").forEach(item => {
    const imageContainer = item.querySelector(".port-image");
    const images = imageContainer.querySelectorAll("img");

    if (images.length > 1) {
      imageContainer.classList.add("multiple");
      let currentIndex = 0;
      images[currentIndex].classList.add("active");

      const showImage = index => {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
      };

      const backButton = item.querySelector(".back");
      const nextButton = item.querySelector(".next");

      if (backButton) {
        backButton.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          showImage(currentIndex);
        });
      }

      if (nextButton) {
        nextButton.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
        });
      }
    }
  });
});
