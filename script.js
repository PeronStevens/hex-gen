window.onload = function() {
    function hexGen() {
        var hex = '#' + Math.random().toString(16).slice(2,8);    
        document.body.style.background = hex;
        document.getElementsByClassName('color')[0].innerHTML = hex;

    }
    hexGen();
    
    var el = document.querySelector('body');
    
    el.onclick = function(e) {
        hexGen();
    }
}