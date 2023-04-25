function myDictionary() {
    var Car = {
        Brand: "BMW",
        Color: "White",
        Model: "320d",
        BHP: "190bhp",
        Make: "2015",
    };
    delete Car.Model; //deletes the model from the car class before it's displayed
    document.getElementById("Dictionary").innerHTML = Car.Model;
}