/* 1. Напишете функция greeting, която приема параметър name и като резултат връща стринг, който поздравява.

Например:

greeting("Jeni"); // "Hello, Jeni!" */


function greeting(name) {
    console.log("Hello, " + name + "!");
};
greeting("Jeni");

/*2.Напишете клас Person, който да задава собствено и фамилно име на конструираните обекти.

Пример:

new Person("Бойко", "Борисов"); // Person { firstName: "Бойко", lastName: "Борисов" } */

function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
    this.fullname = fname + lname;
};

new Person("Бойко", "Борисов");


/*3. Направете втора функция, която да поздравява, но я кръстете personGreeting и вместо име й подавайте обект от тип Person.

Пример:

personGreeting(new Person("Бойко", "Борисов")); // "Hello, Бойко Борисов!" */
 function personGreeting (fname, lanme) {
       fullname = fname + lanme;
        return "Hello, " + fullname + "!";
    }
 personGreeting("Бойко", "Борисов");

/* 4. Направете така, че последната функция да приема още един параметър beFormal, който може да има стойност true или false. Ако е true, нека поздрава да е официялен (т.е. по двете имена на човека), а ако е false - да е само по първо име.

Пример:

var person = new Person("Бойко", "Борисов");
personGreeting(person, true); // "Hello, Бойко Борисов!"
personGreeting(person, false); // "Hi, Бойко!" */



/*5.Направете функция (метод) introduce в класа Person, която да връща стринг, който представя текущия обект (т.е. човека, който е инстанция на класа)

Пример:

var person = new Person("Бойко", "Борисов");
person.introduce(); // "Здравейте, казвам се Бойко Борисов!" */

function introduce