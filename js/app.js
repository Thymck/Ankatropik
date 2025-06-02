fetch("/2025/Anka-tropik-main/headerfooter/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("/2025/Anka-tropik-main/headerfooter/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
