const button = document.getElementById("notify");

button.addEventListener("click", () => {
  fetch("/.netlify/functions/page");
});
