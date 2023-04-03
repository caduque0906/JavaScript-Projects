document.write(typeof "Hello");
document.write("200"+7);

function my_Function() { //creating function
    document.getElementById("Test").innerHTML = isNaN('374'); //verifying if true
}

document.write(-2E310); //negative infinity

document.write (6>3);
document.write (3>6);
console.log(2+3); //testing console.log
console.log(5>8);
document.write (10==10); //verifying if value is equal
document.write (10==1); //verifying if value is equal

x = 12;
y = 12;
document.write (x===y);

n = 12;
m = 13;
document.write (n===m);

a = 12;
b = "12";
document.write (a===b);

c = 12;
d = "13";
document.write (c===d);

document.write (10>20 && 25<3);
document.write (10>2 && 25<26);

document.write (10>20 || 25<3);
document.write (10>2 || 25<26);

function not_Function() {
    document.getElementById("Not").innerHTML = !(10>2);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(2>10);
}