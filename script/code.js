// 
let header = document.querySelector(".navbar-nav");
let a = header.getElementsByClassName("nav-link");
for ( let i = 0; i < a.length; i++) {
  a [i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += "active";
  });
}

