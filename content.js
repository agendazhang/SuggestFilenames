console.log('This is a PDF name suggestor');

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


window.onload = function () {
    console.log(1);
    console.log(get_prev_html_title());
        console.log(2);
    console.log(get_html_title());
        console.log(3);
    console.log(get_current_URL());
        console.log(4);
}
