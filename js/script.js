
// We execute the same script as before
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var tooltip = document.getElementById("tooltip");
var tooltipMobile = document.getElementById("tooltip-mobile");
var svg = document.getElementById("svg");
var btn = document.getElementById("share");


function myFunction() { 

    svg.classList.toggle("svg-fill");
    btn.classList.toggle("btn-background");
    tooltip.classList.toggle("visible");
    tooltipMobile.classList.toggle("visible");
 }


