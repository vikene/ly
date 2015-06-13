'use strict';

/* globals speechSynthesis, SpeechSynthesisUtterance */

var data = document.querySelector('p#data');
function log(message){
  data.innerHTML += message + '<br />';
}

var u = new SpeechSynthesisUtterance();
u.text = 'Dear Madhu ,This is LISA,  real time speech synth. Java is feeling bad!! Sorry.';
u.lang = 'en-US';
u.rate = 1.2;
u.onend = function(event) {
  log('Sorry :(');
};
speechSynthesis.speak(u);

// simple version
speechSynthesis.speak(new SpeechSynthesisUtterance('Take care ! WE ll meet soon '));