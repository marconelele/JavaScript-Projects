function addition_Function() {                                                             // this is the addition function
    var addition = 2 + 2;
    document.getElementById("addfun").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {                                                           // this is the subtraction function
    var subtraction = 5 - 2;
    document.getElementById("subfun").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {                                                        // this is the multiplying function
    var multiplication = 6 * 8;
    document.getElementById("mulfun").innerHTML = "6 x 8 = " + multiplication;
}

function division_Function() {                                                              // this is the division function
    var division = 48 / 6;
    document.getElementById("divfun").innerHTML = "48 / 6 = " + division;
}

function modulus_Operator() {                                                               // this is the modulus function, showing the remainder of each number after division
    var modulus = 25 % 6;
    document.getElementById("modfun").innerHTML = "25 % 6 = " + modulus;
}

function increment() {
    var value = document.getElementById("incText").innerHTML;
    value++;
    document.getElementById("incText").innerHTML = value;
};

function decrement() {
    var value = document.getElementById("decText").innerHTML;
    value--;
    document.getElementById("decText").innerHTML = value;
};

window.alert(Math.random() * 100);                                                          // generates a popup with a random number from 0 to a 100