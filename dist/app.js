"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickhandler(message) {
    console.log('Icarly' + message);
}
if (button) {
    button.addEventListener('Click', clickhandler.bind(null, "You're welcome"));
}
