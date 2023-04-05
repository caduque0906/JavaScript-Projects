var part_1 = "I really ";
var part_2 = "the Legend ";
var part_3 = "of Zelda ";
var part_4 = "series!";
var whole_sentence = part_1.concat(part_2, part_3, part_4); //using concat() method

var Triforce = "Courage, Wisdom, Power";

var section_slice = Triforce.slice(0,7); //using slice() method on concat method
var captial_words = whole_sentence.toUpperCase();
var position = whole_sentence.search("Legend");

document.getElementById("concat").innerHTML = whole_sentence; //displaying concat method
document.getElementById("slice").innerHTML = section_slice; //displaying slice method
document.getElementById("capital").innerHTML = captial_words; //capitalizing all letters
document.getElementById("search").innerHTML = position; //using search() method

var num = 12.6432;
var n = num.toFixed(); //rounding up num
document.write (n);

var text = "Hello World!";
var result = text.valueOf(); //keeping original value of variable
document.write(result);

function String_Method() {
    var X = 182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString(); //making number to string
}

function Precise_Method() {
    var A = 182.4739578352;
    document.getElementById("Precision").innerHTML = A.toPrecision(7);
}