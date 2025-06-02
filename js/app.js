// Sayfanın kökten itibaren derinliğini al
const pathDepth =
  window.location.pathname.replace(/\/$/, "").split("/").length - 3;

// Örn. index.html için: 0 → ./
//      contact/index.html için: 1 → ../
//      product/detail/index.html için: 2 → ../../
const basePath = pathDepth > 0 ? "../".repeat(pathDepth) : "./";

// Header yükle
fetch(basePath + "headerfooter/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Footer yükle
fetch(basePath + "headerfooter/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
