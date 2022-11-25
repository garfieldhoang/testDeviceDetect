var p = document.querySelector('p');

// if( /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//   p.innerText = 'ANDROID'
// }

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  p.innerText = 'IOS'
}


p.innerText = window.navigator.userAgent

console.log(window.navigator.userAgent)
console.log(typeof window.navigator.userAgent)