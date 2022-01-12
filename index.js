// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let btnClicked = [];
let counter = true;
let box;
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);

  if (counter) {
    box = "x";
    counter = false;
  } else {
    box = "y";
    counter = true;
  }
  if (btnClicked.some((btn) => btn === index)) {
  } else {
    btnClicked.push(index);
  }
  fillButton(index, box);
  checkWinner();
}
console.log(btnClicked);
/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer(box) {}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
function checkWinner() {
  const winning = {
    scenario1: [1, 2, 3],
    scenario2: [4, 5, 6],
    scenario3: [7, 8, 9],
    scenario4: [1, 4, 7],
    scenario5: [2, 5, 8],
    scenario6: [3, 6, 9],
    scenario7: [1, 5, 9],
    scenario8: [3, 5, 7],
  };
}

// function restartGame
