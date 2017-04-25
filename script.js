/**
 * Created by 31040701SL141040 on 4/25/2017.
 */
var input_string;
function countChars() {
    input_string = document.getElementById('count').value;
    res = input_string.length;
    document.getElementById('result').innerHTML = input_string + " has " + res + " characters.";
    document.getElementById('counter').value = res;
}
function isEmpty() {
    if (document.getElementById('count').value == ""){
        document.getElementById('result').innerHTML = "Please enter something!";
        document.getElementById('counter').value = "";
    }
    return;
}
function startTimer() {
    setTimeout('countChars()', 1000);
}

//rectangular room
const FEET_TO_METERS = 0.09290304;
var length_input = window.prompt("What is the length of the room in feet?");
var width_input = window.prompt("What is the width of the room in feet?");

var length_in_feet = parseInt(length_input);
var width_in_feet = parseInt(width_input);

var area_in_feet = (length_in_feet * width_in_feet);
var area_in_meters = (area_in_feet * FEET_TO_METERS).toFixed(3);

console.log("You entered dimensions of", length_in_feet, "in feet by", width_in_feet, "feet.");
console.log("The area is\n", area_in_feet, "square feet\n", area_in_meters, "square meters.");
document.write("You entered dimensions of ", length_in_feet, " in feet by", width_in_feet, " feet.");
document.write("The area is\n", area_in_feet, "square feet\n", area_in_meters, "square meters.");
