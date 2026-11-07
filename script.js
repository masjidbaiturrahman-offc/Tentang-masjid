const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  galleryItems.forEach(item => {
    item.hidden = button.dataset.filter !== "all" && item.dataset.category !== button.dataset.filter;
  });
}));

const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const close = () => { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true"); };
  galleryItems.forEach(item => item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }));
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
}
