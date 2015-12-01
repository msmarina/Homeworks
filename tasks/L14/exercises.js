"use strict"
//task 1 works
function greeting(name) {

    return "Hello, " + name + "!";
}

greeting("Jeni");
//task 2 works
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    // 6 works
    this.isPolite = true;
    // 7 ????
    this.bePolite = function () {
        if (this.isPolite === true) {
            return true;
        } else if (this.isPolite === false)
            return false;
    }
    this.fullName = fname + lname;
    // 5 works
    this.introduce = function () {
       // 8 samo pyrvoto se poluchava s false ni6to ne stava
        if (this.isPolite === true) {
            return "Казвам се Бойко Борисов!";
        } else if (this.isPolite == false) {

            return "Аз съм Бойко!";
        }
        return "Здравейте, казвам се " + this.firstName + " " + this.lastName;
    }
    this.greet = function(other) {
        
    }

}


// it is not working 4, 3

var personGreeting = function Person() {
    var beFormal = true;

    return "Hello, " + greeting;
}

personGreeting(new Person("Бойко", "Борисов"));