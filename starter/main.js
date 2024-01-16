"use strict";

function handleform(event, idname) {
  const texts = document.querySelectorAll(".rightContainer");
  const allBtn = document.querySelectorAll(".step-btn");

  for (let i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";
  }

  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].className = allBtn[i].className.replace(" active", "");
  }
  
  document.getElementById(idname).style.display = "block";
  event.currentTarget.className += " active";
}