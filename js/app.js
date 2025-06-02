// Eğer app.js hem index.html hem contact/index.html gibi farklı dizinlerde kullanılıyorsa,
// fetch yollarını dinamik yapabiliriz.

const basePath = window.location.pathname.includes("/contact/") ? "../" : "";

fetch(basePath + "headerfooter/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch(basePath + "headerfooter/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
