var oneCount = 0;
var twoCount = 0;
var threeCount = 0;
function checkTicked1() {
    var data = document.getElementById('textBox1').value;
    var current = document.getElementById('textBox4').value;
    if(oneCount % 2 == 0) {
        current += data;
        oneCount++;
    }
    else {
        current = current.replace(data, "");
        oneCount++;
    }
    document.getElementById('textBox4').value = current;
}

function checkTicked2() {
    var checkbox = document.getElementById('checkBox2');
    var data = document.getElementById('textBox2').value;
    var current = document.getElementById('textBox4').value;
    if(twoCount % 2 == 0) {
        current += data;
        twoCount++;
    }
    else {
        current = current.replace(data, "");
        twoCount++;
    }
    document.getElementById('textBox4').value = current;
}

function checkTicked3() {
    var checkbox = document.getElementById('checkBox3');
    var data = document.getElementById('textBox3').value;
    var current = document.getElementById('textBox4').value;
    if(threeCount % 2 == 0) {
        current += data;
        threeCount++;
    }
    else {
        current = current.replace(data, "");
        threeCount++;
    }
    document.getElementById('textBox4').value = current;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkbox1').addEventListener('click', checkTicked1);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkbox2').addEventListener('click', checkTicked2);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkbox3').addEventListener('click', checkTicked3);
});
