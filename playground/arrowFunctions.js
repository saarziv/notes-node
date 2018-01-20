
var person = {
    name:'saar',
    sayHi : () => console.log(`hi im ${this.name}`),

    // nice way to define a regular function in an object (its the same as to var a =  function () {})
    sayHiAlt() {
        console.log(`hi im ${this.name}`);
    }
};

person.sayHi();
person.sayHiAlt();



