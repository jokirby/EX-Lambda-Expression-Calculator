function getNumber(operationFunc) {
// debugger;
    var one = parseFloat(document.getElementById("num1").value); 
    var two = parseFloat(document.getElementById("num2").value);
    var answer = operationFunc(one, two);
    var output = document.getElementById("output");
    output.innerHTML = answer;
  }

//Button Event Listeners

document.getElementById("addButton")
  .addEventListener("click", function(){ getNumber(add) });

document.getElementById("subtractButton")
  .addEventListener("click", function(){ getNumber(subtract) });

document.getElementById("multiplyButton")
  .addEventListener("click", function(){ getNumber(multiply) });

document.getElementById("divideButton")
  .addEventListener("click", function(){ getNumber(divide) });


//send output to DOM!
// var output = document.getElementById("output");
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply (one, two) {
  return one * two;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add (one, two) {
  return one + two;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract (one, two) {
  return one - two;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide (one, two) {
  return one / two;
}
