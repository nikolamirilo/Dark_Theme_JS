var button = document.querySelector('#darkmode');
var text = document.querySelector('.text');
var img = document.querySelector('#dmc');
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var timesClicked = 0;
var heading = document.querySelector('h1');

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
            document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.904)';
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
img.addEventListener('click', function () {

    function click1() {

        document.body.style.backgroundImage = 'url("Devil-May-Cry-5-livestream.jpg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center'
        document.body.style.height = '100vh';
        img.style.width = '100%';
        text.style.display = 'none';
        heading.style.display = 'none';
    }
    click1();

})

link1.addEventListener('click', function () {
    document.body.style.backgroundColor = ' rgba(245, 222, 179, 0.767)';
    document.body.style.color = 'black';
    document.querySelector('#link1').style.color = 'black';
    document.querySelector('#link2').style.color = 'black';
    button.style.backgroundColor = 'black';
    button.innerHTML = 'Dark';
    button.style.color = 'white';
    button.style.fontWeight = '600';
});













