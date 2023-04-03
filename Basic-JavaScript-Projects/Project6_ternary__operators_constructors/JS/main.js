function Ride_Function() {
    var Height, Can_ride; //creating 2 identifers
    Height = document.getElementById("Height").value; //giving identifier a value 
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //giving identifier a value
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Verification").innerHTML = Can_Vote + " to vote";
}

function Vehicle (Make, Model, Year, Color) { //practice this and new
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

function Legend (Element, Gender, Role, Name) {
    this.Legend_Element = Element;
    this.Legend_Gender = Gender;
    this.Legend_Role = Role;
    this.Legend_Name = Name;
}
var Link = new Legend ("Courage", "Male", "Warrior", "Link");
var Zelda = new Legend ("Wisdom", "Female", "Princess", "Zelda");
var Ganondorf = new Legend ("Power", "Male", "Evil Villan", "Ganondorf");
function Triforce() {
    document.getElementById("New_and_This").innerHTML = "The Triforce consist of 3 Elements. " + Ganondorf.Legend_Element + ", which is held by " + Ganondorf.Legend_Name + ", " + Zelda.Legend_Element + ", which is held by " + Zelda.Legend_Name + ", and " + Link.Legend_Element + ", which is held by " + Link.Legend_Name + ".";
}

function Nested() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(); {
        var Starting_Point = 9;
        function Plus_one() {Starting_Point += 1};
        Plus_one();
        return Starting_Point;
    }
}