fetch("headerfooter/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Header yüklendikten sonra linkleri ayarla
    const currentPath = window.location.pathname; // Örn: /Ankatropik/contact/index.html
    const basePath = "/Ankatropik/";

    const links = document.querySelectorAll("#header a");

    links.forEach((link) => {
      let href = link.getAttribute("href");

      // Eğer href göreli ise basePath ekle
      if (!href.startsWith("http") && !href.startsWith("/")) {
        // href göreli ise başına basePath ekle
        link.setAttribute("href", basePath + href);
      }
    });
  });
