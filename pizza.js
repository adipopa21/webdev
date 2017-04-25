/**
 * Created by 31040701SL141040 on 4/25/2017.
 */
var people = window.prompt("How many people?");
var pizzas = window.prompt("How many pizzas do you have?");
var slices = window.prompt("How many slices does each pizza have?");

var product = (pizzas * slices);
var quotient = (product / people);
var remainder = (product % people);
console.log(people  + " people with " + pizzas + " pizzas. Each person gets " + quotient + " pieces of pizza. There are " + remainder +  " leftover pieces." );