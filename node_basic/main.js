var users = { name: "gyamzo", age: 25 }
console.log(users.name);

//Anonymous function
var add = function(a, b) {
    c = a + b;
    console.log("addition is " + c);
}

add(4, 5);

//arrow function
var name = "gyamzo";
var address = "nepal";
var users = () => {
    return console.log("this is arrow function");
};
users();

module.exports.name = name;
module.exports.address= address;
