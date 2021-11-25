

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://builtin.com/artificial-intelligence", true, null, null);
xhr.responseType = "document";

xhr.onload = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseXML.querySelectorAll('.description');
        var p_ai = document.getElementById("scrape_AI_def");

        p_ai.innerText = response[0].textContent;

        console.log(response);
    }
};

xhr.onerror = function() {
    console.error(xhr.status, xhr.statusText);
}

xhr.send();