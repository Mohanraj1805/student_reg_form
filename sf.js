var table = document.getElementById("table");

function save() {
  // Get input values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.querySelector('input[name="gender"]:checked')
    ? document.querySelector('input[name="gender"]:checked').value
    : "Not specified";
  var course = document.getElementById("course").value;
  var email = document.getElementById("email").value;

  // Create a new row
  var table_row = document.createElement("tr");

  // Populate the new row with the collected values
  table_row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button onclick="deleteitems(event)">DELETE</button></td>
    `;

  // Append the new row to the table
  table.appendChild(table_row);

  // Clear the input fields after saving
  clearInputFields();
}

function clearInputFields() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false; // Uncheck radio buttons
  document.getElementById("course").value = "";
  document.getElementById("email").value = "";
}

function deleteitems(event) {
  event.target.parentElement.parentElement.remove(); // Remove the row of the button clicked
}
