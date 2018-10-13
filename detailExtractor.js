// function buildTypedUrlList(divName) {
//   // To look for history items visited in the last week,
//   // subtract a week of microseconds from the current time.
//   var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
//   var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
//   // Track the number of callbacks from chrome.history.getVisits()
//   // that we expect to get.  When it reaches zero, we have all results.
//   chrome.history.search({
//       'text': '',              // Return every history item....
//       'startTime': oneWeekAgo  // that was accessed less than one week ago.
//     },
//     function(historyItems) {
//       // For each history item, get details on all visits.
//       for (var i = 0; i < historyItems.length; ++i) {
//         var url = historyItems[i].url;
//         console.log(url);
//     });
// }

console.log('manifest yay');
var $ = document.getElementById.bind(document);

function getVisitDetails(visitItems) {
    for (var i = 0; i < visitItems.length; i++) {
        var item = visitItems[i];
        console.log(item.visitId);
    }
}

function retrieveVisitId() {
    chrome.history.getVisits("https://www.google.com/",
    getVisitDetails);
}

function getHistory(historyItems) {
    for (var i = 0; i < historyItems.length; i++) {
        var item = historyItems[i];
        console.log(item.id);
    }
}


const kMillisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
const kOneWeekAgo = (new Date).getTime() - kMillisecondsPerWeek;

chrome.runtime.onMessage.addListener(function() {
    chrome.history.search({
            text: '',
            startTime: kOneWeekAgo,
        }, getHistory);
});

function get_details() {
    var details = {};
    details["title_HTML"] = get_html_title();
    details["prev_title_HTML"] = get_prev_page_title();
    return details;
}

// Doesn't work for .pdf files (only body tags appear)
// EG: http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf
// Q: Where does HTML title come from?
function get_html_title() {
    var titles = document.getElementsByTagName("title");
    if (titles.length != 0) return titles[0].innerHTML;
    return null;
}

function get_prev_page_title() {
    if (history.length != 1) {
        history.back();
        title = get_html_title();
        history.forward();
        return title;
    }
    return null;
}

function close_window() {
    window.open('','_parent','');
    window.close();
}

function get_current_URL() {
    return document.URL;
}
