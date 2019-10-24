
/* problem: How to click nav button to display hidden links and not disturb rest of elements
solution: add JS that toggles classes with new styles */

const navButton = document.getElementById("navButton");

const showMenu = () => {
const x = document.getElementById("hiddenLinks");
x.classList.toggle("showLinks");
const y = document.getElementById("orderButton");
y.classList.toggle("orderButtonLower");
};

navButton.addEventListener("click", showMenu);


