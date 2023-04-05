function Call_Loop() { //creating function for button
    var Digit = "";
    var X = 1; // creating a variable starting number
    while (X < 11) { //loop function within Call_Loop function
        Digit += "<br>" + X; //adding 1 to Digit
        X++; //increments of 1
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Triforce = "Courage, Wisdom, Power";
document.write(Triforce.length);

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() { //for loop for insturments
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function Legend_Of_Zelda() {
    var Triforce_Element = [];
    Triforce_Element [0] = "Courage";
    Triforce_Element [1] = "Wisdom";
    Triforce_Element [2] = "Power";
    document.getElementById("Triforce").innerHTML = "One element of the triforce is " + Triforce_Element[2] + ".";
}

function constant_function() { //const function
    const Samsung_S23_Ultra = {size:'6.8"', color:"Phantom Black", Price:"$1,619.99"}; //properties for object
    Samsung_S23_Ultra.storage = "1TB"; //added property and value
    Samsung_S23_Ultra.spen = "intergrated S Pen";
    let starting_price = "$1199.99"; //using let instead of var. Price will not change.
    document.getElementById("Constant").innerHTML = "My favorite color for the Samsung S23 Ultra is " + Samsung_S23_Ultra.color + "and the price is " + Samsung_S23_Ultra.Price + ". This phone has an " + Samsung_S23_Ultra.spen + ". The starting price for the S23 Ultra line is " + starting_price + ".";
}

function myFunction() {
    return Math.PI;
}
document.getElementById("demo").innerHTML = myFunction();

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 5; i++) {
    if (i == 3) break;
    text += i + "<br>";
}
document.getElementById("break").innerHTML = text;

let a = "";
for (let b = 0; b < 5; b++) {
    if (b ===3) continue;
    a += b + "<br>";
}
document.getElementById("continue").innerHTML = a;