const button = document.querySelector('#darkmode');
const text = document.querySelector('.text');
var timesClicked = 0;

darkButton = (backgroundColor, color) => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('#link1').style.color = 'white';
    document.querySelector('#link2').style.color = 'white';
}
whiteButton = (backgroundColor, color) => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('#link1').style.color = 'black';
    document.querySelector('#link2').style.color = 'black';
}

button.addEventListener('click', function () {
    timesClicked++;

    if (timesClicked % 2 == 0) {
        function whiteMode() {
            document.body.style.backgroundColor = ' rgba(245, 222, 179, 0.767)';
            document.body.style.color = 'black';
            document.querySelector('#link1').style.color = 'black';
            document.querySelector('#link2').style.color = 'black';
            button.style.backgroundColor = 'black';
            button.innerHTML = 'Dark';
            button.style.color = 'white';
            button.style.fontWeight = '600';

        }
        whiteMode();
    }
    else {
        function darkMode() {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.querySelector('#link1').style.color = 'white';
            document.querySelector('#link2').style.color = 'white';
            button.style.backgroundColor = 'white';
            button.innerHTML = 'Light';
            button.style.color = 'black';
            button.style.fontWeight = '600';
        }
        darkMode();
    }

})