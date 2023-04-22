function buttonPress() {
    var str = "Surprise!";
    document.getElementById("Button_Text").innerHTML = str;
}

function myFunction() {
    var text1 = "I am learning";
    text1 += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = text1;
}

const myElement = document.getElementById("Concatenate");           //selecting the id "concatenate" in the index.html
myElement.style.color = "blue";                                     //assigning it the color blue

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
