function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);

  section.scrollIntoView({ behavior: "smooth" });
}
function next() {
  hideElementByID("homeScreen");
  showElementByID("success");
}

function Continue() {
  hideElementByID("success");
  showElementByID("homeScreen");
}
const seatCountElement = document.getElementById("seat-count");

if (seatCountElement.innerText === "4") {
  document.getElementById("nextButton").removeAttribute("disabled");
} else {
  // If the seat count is not 4, disable the "disabled" attribute
  document.getElementById("nextButton").setAttribute("disabled", "disabled");
}
