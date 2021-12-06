const images = document.querySelectorAll(".image img");
const gallery = document.querySelector(".gallery");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const galleryImage = document.querySelector(".image-inner img");
const close = document.querySelector(".close");
let currentIndex = 0;
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showGallery();
    });
});
function showGallery() {
    currentIndex === images.length - 1 ? next.classList.add("hide") : next.classList.remove("hide");
    currentIndex === 0 ? prev.classList.add("hide") : prev.classList.remove("hide");
    gallery.classList.add("show");
    galleryImage.src = images[currentIndex].src;
}
next.addEventListener("click", () => {
    currentIndex != images.length - 1 ? currentIndex++ : undefined;
    showGallery();
});
prev.addEventListener("click", () => {
    currentIndex != 0 ? currentIndex-- : undefined;
    showGallery();
});
close.addEventListener("click", () => {
    gallery.classList.remove("show");
});
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) gallery.classList.remove("show");
});
