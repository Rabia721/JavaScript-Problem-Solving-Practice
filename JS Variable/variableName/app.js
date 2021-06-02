// Declaring a global variable
var globalVariable = 15;

function firstVariable()
{
    // Declaring a Local Variable
    let vari = 10;
    var a = 5;

    secondVariable();
}

function secondVariable()
{
    console.log(vari);   // Undefined Variable
    console.log(a);     // Undefined Variable

}


function globalVar()
{
    console.log(globalVariable);    // 15
}
globalVar();

firstVariable();
