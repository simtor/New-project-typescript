"use strict";
let logged;
function sendAanalytics(data) {
    console.log(data);
    logged = true;
}
sendAanalytics('The data');
