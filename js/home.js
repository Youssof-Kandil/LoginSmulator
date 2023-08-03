var nameforUser = document.querySelector("#placeholder");
nameforUser.innerHTML = localStorage.getItem("name");
var buttonLogout = document.querySelector("#logout");

buttonLogout.addEventListener("click", function () {
  localStorage.removeItem("name");
  window.location.href = "../index.html";
});
