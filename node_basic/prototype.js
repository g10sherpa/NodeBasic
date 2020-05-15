var student = function() {
    this.name = "gyamzo";
    this.age = 26;
    this.email = "megyamzo@gmail.com";
}

//extend
student.prototype = {
    address: "new delhi",
    getName: function() {
        return this.name;
    }
}

var stud = new student();
console.log(stud.getName());
console.log(stud.address);