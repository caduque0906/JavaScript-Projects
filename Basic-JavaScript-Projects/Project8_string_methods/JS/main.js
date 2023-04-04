var part_1 = "I really ";
var part_2 = "the Legend ";
var part_3 = "of Zelda ";
var part_4 = "series!";
var whole_sentence = part_1 + part_2 + part_3 + part_4; //using concat() method
var section_slice = whole_sentence.slice(13,28); //using slice() method on concat method
var captial_words = whole_sentence.toUpperCase();
var position = whole_sentence.search("Legend");

document.getElementById("concat").innerHTML = whole_sentence; //displaying concat method
document.getElementById("concat").innerHTML = section_slice; //displaying slice method
document.getElementById("concat").innerHTML = captial_words; //capitalizing all letters
document.getElementById("concat").innerHTML = position; //using search() method

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