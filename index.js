const codeYellowButton = document.getElementById("code-yellow");

codeYellowButton.addEventListener("click", () => {
  fetch("/.netlify/functions/code-yellow");
});
