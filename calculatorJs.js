let Str = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            Str = eval(Str);
            document.querySelector('input').value = Str;
        } else if (e.target.innerHTML == 'AC') {
            Str = "";
            document.querySelector('input').value = Str;
        } else if (e.target.innerHTML == 'DEL') {
            Str = Str.substring(0, Str.length - 1);
            document.querySelector('input').value = Str;
        } else {
            console.log(e.target)
            Str = Str + e.target.innerHTML;
            document.querySelector('input').value = Str;
        }
    })
})

function changeMode() {
    let myContainer = document.getElementById("mainId");
    myContainer.classList.toggle('lightContainer')
}