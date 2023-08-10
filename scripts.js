function clc() {
    var p = document.getElementById('number').value;
    var tax = p * 0.101;
    var formattax = tax.toFixed(2);
    var print = "Tax: Rs" + formattax;
    document.getElementById('x').innerHTML = print;
}

function reset() {
    document.getElementById('number').value = '';
    document.getElementById('x').innerHTML = '';
}



