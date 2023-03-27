function My_First_Function() {
    var link = 'Courage';
    var zelda = 'Wisdom';
    var ganondorf = 'Power';
    document.getElementById("triforce").innerHTML = link + "<br>" + zelda + "<br>" + ganondorf;
}

function My_Second_Function() {
    var triforce = 'Courage';
    triforce += ' Wisdom and Power';
    document.getElementById("LoZ").innerHTML = triforce;
}   