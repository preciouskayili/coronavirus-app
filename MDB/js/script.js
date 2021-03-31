var countries = [
  "Ghana",
  "USA",
  "London",
  "UK",
  "Cameron",
  "Dubai",
  "Nigeria",
  "Turkey",
  "Canada",
];
function populateSelect() {
  var html = "";
  html += "<option disabled>-- Choose country --</option>";
  for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    html += "<option value='" + element + "'>" + element + "</option>";
  }

  $("#from").html(html);
}

function populateSecond() {
  var fromValue = document.getElementById("from").value;
  var html = "";
  html += "<option disabled>-- Choose country --</option>";
  for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    if (fromValue != element) {
      html += "<option value='" + element + "'>" + element + "</option>";
    }
  }
  $("#to").html(html);
}

function deleteItem() {
  var html = "";

  html -= "<div></div>";

  $("#delete").html(html);
}

$(document).ready(function () {
  $("#deleteThis").click(function () {
    $("#deleteEmptyResult").css("display", "none");
  });
});

function deleteCard() {
  var html = "";

  html -= "<div></div>";

  $("#delete").html(html);
}

function deleteInput() {
  document.getElementById("deleteItem").disabled = true;
}

function restoreInput() {
  document.getElementById("deleteItem").disabled = false;
}
