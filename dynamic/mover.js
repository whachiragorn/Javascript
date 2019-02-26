// mover.js
//   Illustrates moving an element within a document
     
// The event handler function to move an element

function moveIt(movee, newTop, newLeft) {

  dom = document.getElementById(movee).style; 

// Change the top and left properties to perform the move
//  Note the addition of units to the input values 

  // document.getElementById(movee).style.top=newTop 
  // document.getElementById(movee).style.top=newLeft

  dom.top=newTop +"px";
  dom.left=newLeft +"px";
// add your code here 


}
