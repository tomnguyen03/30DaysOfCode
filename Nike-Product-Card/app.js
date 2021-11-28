const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
let prevColor = "blue";
function changeColor() {
    let primary = this.getAttribute("primary");
    let color = this.getAttribute("color");
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
    if (color == prevColor) return;
    colors.forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
    document.documentElement.style.setProperty("--primary", primary);
    shoes.forEach((s) => s.classList.remove("show"));
    shoe.classList.add("show");
    gradients.forEach((g) => g.classList.remove("first", "second"));
    gradient.classList.add("first");
    prevGradient.classList.add("second");
    prevColor = color;
}
function changeSize() {
    sizes.forEach((size) => size.classList.remove("active"));
    this.classList.add("active");
}
colors.forEach((c) => c.addEventListener("click", changeColor));
sizes.forEach((size) => size.addEventListener("click", changeSize));
