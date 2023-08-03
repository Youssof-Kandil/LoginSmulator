var buttonLogin = document.querySelector("#login");
var errorMessage = document.querySelector("#errorMessage");
if (localStorage.getItem("Users") == null) {
  var siteContainer = [];
} else {
  var siteContainer = JSON.parse(localStorage.getItem("Users"));
}

var signMail;
var signPass;
buttonLogin.addEventListener("click", function () {
   signMail = document.querySelector("#signInEmail");
   signPass = document.querySelector("#signInPass");
  var regex = /(.|\s)*\S(.|\s)*/;
  if (!regex.test(signMail.value) || !regex.test(signPass.value)) {
    errorMessage.innerHTML = "All inputs are needed";
    return;
  }
  logIn();
});

// sign in

function logIn() {
  if (!validateExists()) {
    errorMessage.innerHTML = "Email Doesn't exist or Wrong Password...";
    return;
  }
  for (let i = 0; i < siteContainer.length; i++) {
    if (
      signMail.value == siteContainer[i].email &&
      signPass.value == siteContainer[i].pass
    ) {
      localStorage.setItem("name", siteContainer[i].name);
      window.location.href = "../home.html";
      return;
    }
  }
  errorMessage.innerHTML = "Email Doesn't exist or Wrong Password...";


}

function validateExists() {
  for (let i = 0; i < siteContainer.length; i++) {
    if (signMail.value == siteContainer[i].email) {
      return true;
    }
  }
  return false;
}
