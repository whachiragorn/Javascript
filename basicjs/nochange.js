// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here
x = document.getElementById("french").value
// Compute the cost

  document.getElementById("cost").value = x*3.49
  //totalCost = xxx
}  //* end of computeCost
