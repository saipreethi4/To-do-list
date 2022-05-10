function populate() {
  //Creaing an XMR Object
  var xhttp = new XMLHttpRequest();
  // EVentlistner
  xhttp.onreadystatechange = function () {
    try {
      if (xhttp.readyState === XMLHttpRequest.DONE)
        if (xhttp.status === 200) {
          console.log(xhttp.responseText);
          show(xhttp.responseText);
        } else {
          alert("API Error");
        }
    } catch (e) {
      alert(e.description);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhttp.send();
}

function mainpage() {
  window.location.href = "index.html";
}

function show(data) {
  var list = JSON.parse(data);
  let table = document.getElementById("mytable");
  for (var i = 0; i < list.length; i++) {
    let row_count = table.rows.length;
    var row = table.insertRow(row_count);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = list[i].id;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = list[i].title;
    var cell3 = row.insertCell(2);
    var element = document.createElement("input");
    element.type = "checkbox";

    if (list[i].completed == true) {
      element.setAttribute("checked", "true");
      element.setAttribute("disabled", "true");
    }
    element.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        count++;
        checkCounter();
      } else {
        count--;
      }
    });
    cell3.appendChild(element);
  }
}

var count = 0;
function checkCounter() {
  let promise = new Promise(function (resolve, reject) {
    if (count == 5) {
      resolve("Congrats 5 tasks have been completed");
    }
  });
  promise.then(function (s) {
    alert(s);
  });
}
