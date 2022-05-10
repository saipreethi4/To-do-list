var count = 0;
function populate() {
  count = 0;
  //Creaing an XMR Object
  var xhttp = new XMLHttpRequest();
  // EVentlistner
  xhttp.onreadystatechange = function () {
    //condition
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);
      var temp = "";

      for (var i = 0; i < response.length; i++) {
        temp += "<tr>";
        temp += "<td>" + response[i].id + "</td>";
        temp += "<td>" + response[i].title + "</td>";
        if (response[i].completed) {
          temp +=
            "<td>" + `<input type="checkbox" disabled checked  />` + "</td>";
        } else {
          temp +=
            "<td>" +
            `<input type="checkbox" onclick="checkVal(this)" />` +
            "</td>";
        }
      }
      document.getElementById("data").innerHTML = temp;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function checkVal(elm) {
  if (elm.checked) {
    // alert("hi");
    count++;
  } else {
    count--;
  }
  var promise = new Promise(function (resolve, reject) {
    if (count == 5) {
      resolve("congratulations 5 tasks have been completed");
    } else {
      reject();
    }
  });

  promise
    .then(function (s) {
      alert(s);
    })
    .catch(function (e) {
      console.log(e);
    });
}

function logout() {
  window.location.href = "./index.html";
}
