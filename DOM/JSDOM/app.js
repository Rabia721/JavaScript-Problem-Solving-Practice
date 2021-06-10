
var first = document.getElementsByClassName('div-class');

for (let i = 1; i < first.length; i++)
{
    first[0].classList.replace('div-class', 'changed-class');
}