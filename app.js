var p = document.querySelector('p');
var s = document.querySelector('strong');

// if( /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//   p.innerText = 'ANDROID'
// }

if( /iPhone|iPad|iPod/i.test(window.navigator.userAgent) ) {
  s.innerText = 'IOS'
} else {
  s.innerText = 'ELSE'
}

p.innerText = window.navigator.userAgent;


console.log(window.navigator.userAgent)
console.log(typeof window.navigator.userAgent)