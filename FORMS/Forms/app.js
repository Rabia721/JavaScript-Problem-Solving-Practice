var error = document.getElementById("error-msg");

document.getElementById('btn').addEventListener("click", function() {
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("em").value;
    var pos = email.indexOf("@");

    if (email == "" || pass == "") {
        error.style.display = "block";
    } else {
        if (pass.length <= 8) {
            alert("Passwords can't be less than 8 characters.")
        } else if (pos < 1) {
            alert("Your Email should have @");
        } else if (pass.length > 8) {
            alert("Login Successfull!!")
        }
    }
});