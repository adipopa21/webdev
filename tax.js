/**
 * Created by 31040701SL141040 on 4/25/2017.
 */
function calculateTax() {
    var x = parseFloat(document.getElementById('order-am').value);
    var y = document.getElementById('state').value;
    var tax = 0.55;
    var tot = x + tax;
    var st = y.slice(0, 2);
    var stat = st.toUpperCase();

    if(stat == "WI") {
        document.getElementById('text').innerHTML =
            "What is the order amount? " + x + "<br/>" +
            "What is the state? " + stat + "<br/>" +
            "The subtotal is $" + x.toFixed(2) + "." + "<br/>" +
            "The tax is $" + tax + "." + "<br/>" +
            "The total is " + tot + ".";
    }
    if(stat == "MN") {
        document.getElementById('text').innerHTML =
            "What is the order amount? " + x + "<br/>" +
            "What is the state? " + stat + "<br/>" +
            "The total is $" + x.toFixed(2) + "." + "<br/>";
    }
}