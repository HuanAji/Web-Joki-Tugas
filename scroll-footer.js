document
  .getElementById("backToTop")
  .addEventListener("click", function (event) {
    event.preventDefault(); // mencegah link default
    window.scrollTo({
      top: 0,
      behavior: "smooth", // scroll dengan efek halus
    });
  });
