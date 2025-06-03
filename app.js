let basePath =
  window.location.pathname.includes("/contact/") ||
  window.location.pathname.includes("/product/")
    ? "../headerfooter/"
    : "headerfooter/";

fetch(basePath + "header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch(basePath + "footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
