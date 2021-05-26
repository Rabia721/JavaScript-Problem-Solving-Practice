

function techkaro()
{
    document.getElementById("h1").innerHTML += " " + document.getElementById("name").value;
    var number = document.getElementById("num").value;

    alert("The message has been sent on the given number: " + number);
}