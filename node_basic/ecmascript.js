//ECMAScript or ES6 2015
//let, const, templating string, class

//let a = 30;

//function abc() {
//let a = 40;
//  console.log(a);
//}

//console.log(a);
//abc();


//const b = {
//  "name": "gyamzo",
//"age":25
//b.email = "megyamzo@gmail.com";
//console.log(b);

//templating string
//var name="gyamzo";
//var age=28;
//console.log("hi ${name} you are ${age} years old");

//class ClassName 

class users {
    constructor() {
        this.name = "gyamzo";
        this.age = 28;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

var user = new users();
console.log(user.getName());