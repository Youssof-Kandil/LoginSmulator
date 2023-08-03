var buttonLogin = document.querySelector("#signIn");
var errorMessage = document.querySelector("#errorMessage");
var successMessage = document.querySelector("#successMessage");
if (localStorage.getItem("Users") == null) {
  var userContainer = [];
} else {
  var userContainer = JSON.parse(localStorage.getItem("Users"));
}
var signInName;
var signMail;
var signPass;
buttonLogin.addEventListener("click", function () {
   signInName = document.querySelector("#signInName");
   signMail = document.querySelector("#signInEmail");
   signPass = document.querySelector("#signInPass");
  var regex = /(.|\s)*\S(.|\s)*/;
  if (!regex.test(signMail.value) || !regex.test(signPass.value) || !regex.test(signInName.value)) {
    errorMessage.innerHTML = "All inputs are needed";
    return;
  }
  signup();
});

function signup() {
  if (validateExists()) {
    errorMessage.innerHTML =
      "Email Already Registered Please Login Instead. Or use another mail";
      return;
  }
  var user = {
    name: signInName.value,
    email: signMail.value,
    pass: signPass.value,
  };
  userContainer.push(user);
  localStorage.setItem("Users", JSON.stringify(userContainer));
  window.alert("Registered successfully");
  window.location.href = "../index.html";
}

function validateExists() {
  for (let i = 0; i < userContainer.length; i++) {
    if (signMail.value == userContainer[i].email) {
      return true;
    }
  }
  return false;
}
