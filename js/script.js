
// // We execute the same script as before
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

var btn = document.getElementById("share");

console.log(btn.offsetLeft);
console.log(btn.offsetWidth);

var tlp = document.getElementById("tooltip");

tlp.style.top = (btn.offsetTop - 60) + "px";
tlp.style.left = (btn.offsetLeft - tlp.offsetWidth/2 - 6.5) + "px";