const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const temaBtn = document.getElementById("temaBtn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("claro-tema");
  const temaClaro = document.body.classList.contains("claro-tema");
  temaBtn.textContent = temaClaro ? "☀️" : "🌙";
});

document.getElementById("ano").textContent = new Date().getFullYear();
