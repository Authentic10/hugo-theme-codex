/*
 * Handles mobile nav
 */

function toggleMobileNavState() {
  const body = document.querySelector("body");
  body.classList.toggle("nav--active");
}

/*
 * Initializes burger functionality
 */

function initBurger() {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleMobileNavState);
}

initBurger();

/* Change mode script */

/*function changeMode() {
  var switcher = document.getElementById('mode');
  var element = document.body;
  var links = document.getElementById('navigation');


  if(!switcher.checked){
    //alert('checked');
    element.classList.toggle("dark-mode");
    links.classList.toggle("dark-mode");
    //switcher.checked = true;
    localStorage.setItem('darkMode','true');
  } else {
    element.classList.toggle("dark-mode");
    links.classList.toggle("dark-mode");
    localStorage.removeItem('darkMode');
  }

  if(localStorage.getItem('darkMode')){
    //alert('Dark');
    //switcher.checked = true;
    //element.classList.toggle("dark-mode");
  }

  //const saved = localStorage.getItem("") || "auto";
  //element.classList.toggle("dark-mode");
}*/