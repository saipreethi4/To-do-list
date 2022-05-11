// function validate(callback) {
//   var username = document.getElementById("username").value.trim();
//   var password = document.getElementById("password").value.trim();
//   if (username == "admin" && password == "12345") {
//     callback();
//   } else {
//     alert("Invalid credentials");
//   }
// }

// function redirect() {
//   window.location.href = "todo.html";
// }

//*** */

function validate(callback) {
  var usererror = document.getElementById("usererror");
  var username = document.getElementById("username");
  var passerror = document.getElementById("passerror");
  var password = document.getElementById("password");
  var flag1 = false;
  var flag2 = false;
  if (username.value.trim() == "admin") {
    usererror.textContent = "";
    username.style.borderColor = "green";
    flag1 = true;
  } else if (username.value.trim() == "") {
    usererror.textContent = "*enter username";
    usererror.style.color = "red";
    username.style.borderColor = "red";
    flag1 = false;
  } else {
    usererror.textContent = "*invalid username";
    usererror.style.color = "red";
    username.style.borderColor = "red";
    flag1 = false;
  }
  if (password.value.trim() == "12345") {
    passerror.textContent = "";
    password.style.borderColor = "green";
    flag2 = true;
  } else if (password.value.trim() == "") {
    passerror.textContent = "*enter password";
    passerror.style.color = "red";
    password.style.borderColor = "red";
    flag2 = false;
  } else {
    passerror.textContent = "*invalid password";
    passerror.style.color = "red";
    password.style.borderColor = "red";
    flag2 = false;
  }
  if (flag1 && flag2) {
    callback();
  } else {
    return false;
  }
}
function redirect() {
  window.location.href = "todolist.html";
}
