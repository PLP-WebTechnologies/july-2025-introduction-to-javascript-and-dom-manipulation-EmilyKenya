// ------------------------------
// Part 1: Variables + Conditionals
// ------------------------------
function checkAge() {
  // Get the value from the input box
  var age = document.getElementById("ageInput").value;
  var message = "";

  // Simple if/else conditions
  if (age >= 18) {
    message = "✅ You are an adult.";
  } else if (age > 0) {
    message = "❌ You are still a minor.";
  } else {
    message = "⚠️ Please enter a valid age.";
  }

  // Show result on the page
  document.getElementById("ageResult").textContent = message;
}

// ------------------------------
// Part 2: Functions
// ------------------------------
// Function that does one job: formats a greeting
function makeGreeting(name) {
  return "Hello, " + name + "! 👋";
}

// Another function that uses the first one
function showGreeting() {
  var greeting = makeGreeting("Emily"); // you can change the name
  document.getElementById("greeting").textContent = greeting;
}

// ------------------------------
// Part 3: Loops
// ------------------------------
function listNumbers() {
  var list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous list

  // for loop: repeat 5 times
  for (var i = 1; i <= 5; i++) {
    var item = document.createElement("li"); // make new list item
    item.textContent = "Number " + i;        // set text
    list.appendChild(item);                  // add to page
  }

  // Example of a while loop (prints to console)
  var count = 3;
  while (count > 0) {
    console.log("Countdown: " + count);
    count--;
  }
}

// ------------------------------
// Part 4: DOM Manipulation
// ------------------------------
var colorBtn = document.getElementById("colorBtn");
var addItemBtn = document.getElementById("addItemBtn");
var dynamicList = document.getElementById("dynamicList");

// 1) Change background color
colorBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// 2) Add a new list item each time button is clicked
addItemBtn.addEventListener("click", function() {
  var item = document.createElement("li");
  item.textContent = "New item " + (dynamicList.children.length + 1);
  dynamicList.appendChild(item);
});

// 3) Change item text when clicked
dynamicList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.textContent += " ✔️";
  }
});
