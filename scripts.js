function get_prev_html_title() {
    chrome.runtime.sendMessage({
            call: "getPrevTitle",
            url: document.URL
        },
        function (response) {
            console.log(response);
        });
}

// Doesn't work for .pdf files (only body tags appear)
// EG: http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf
// Q: Where does HTML title come from?
function get_html_title() {
    var titles = document.getElementsByTagName("title");
    if (titles.length != 0) return titles[0].innerHTML;
    return null;
}

function get_current_URL() {
    var str_array = document.URL.split("/");
    var name_pdf = str_array[str_array.length-1];
    return name_pdf.substring(0, name_pdf.length-4);
}


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

function saveButtonClicked() {
    chrome.storage.sync.set({
    fileNamePrefix: document.getElementById('textBox4').value,
  }, function() {
    var status = document.getElementById('savebutton');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}

console.log("hi");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkbox1').addEventListener('click', checkTicked1);
    document.getElementById('checkbox2').addEventListener('click', checkTicked2);
    document.getElementById('checkbox3').addEventListener('click', checkTicked3);
    document.getElementById('savebutton').addEventListener('click', saveButtonClicked);
    chrome.runtime.sendMessage({
            call: "getPrevTitle",
            url: document.URL
        },
        function (response) {
            console.log(response);
            document.getElementById('checkbox1').value = response;
        });
});
