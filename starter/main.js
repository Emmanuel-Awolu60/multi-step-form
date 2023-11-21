const nameValue = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// const next = document.getElementById("next");
const btnNext = document.querySelector(".btn-next");
const value = document.querySelectorAll("input");
const first = document.querySelector("#first");
// btnNext.addEventListener("click", () => {
//   const text = document.querySelectorAll(".rightContainer");
//   const allBtn = document.querySelectorAll("step-btn");

//   for (let i = 0; i < text.length; i++) {

//   }
// });

function handleform(e) {
  const text = document.querySelectorAll(".rightContainer");
  const prevBtn = document.querySelectorAll(".btn-prev ");
  const nextBtn = document.querySelectorAll("step-btn");
  // This function will display the specified tab of the form...
  for (let i = 0; i < text.length; i++) {
    text[i].style.display = "none";
    //... and fix the Previous/Next buttons:
    if (e == 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "inline";
    }
  }
  if (n == x.length - 1) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(e);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var text = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  text[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

// function handleform(event, idname) {
//   const text = document.querySelectorAll(".rightContainer");
//   const allBtn = document.querySelectorAll("step-btn");

//   for (let i = 0; i < text.length; i++) {
//     text[i].style.display = "none";
//   }

//   for (let i = 0; i < allBtn.length; i++) {
//     allBtn[i].className = allBtn[i].className.replace("active", "");
//   }
//   document.getElementById(idname).style.display = "flex";
// event.currentTarget.className += " active";
