function clearName() {
    if (
      document.getElementById("nameField").value == "First and Last Name"
    ) {
      document.getElementById("nameField").value = "";
    }
  }
  function resetName() {
    if (document.getElementById("nameField").value == "") {
      document.getElementById("nameField").value = "First and Last Name";
    }
  }
  function clearPhone() {
    if (document.getElementById("phoneField").value == "example: 212-123-1234") {
      document.getElementById("phoneField").value = "";
    }
  }
  function resetPhone() {
    if (document.getElementById("phoneField").value == "") {
      document.getElementById("phoneField").value = "example: 212-123-1234";
    }
  }
  function clearBand() {
    if (document.getElementById("bandField").value == "example: Metallica") {
      document.getElementById("bandField").value = "";
    }
  }
  function resetBand() {
    if (document.getElementById("bandField").value == "") {
      document.getElementById("bandField").value = "example: Metallica";
    }
  }

  function clearEmail() {
    if (document.getElementById("emailField").value == "example: johndoe@yourhouse") {
      document.getElementById("emailField").value = "";
    }
  }
  function resetEmail() {
    if (document.getElementById("emailField").value == "") {
      document.getElementById("emailField").value = "example: johndoe@yourhouse";
    }
  }