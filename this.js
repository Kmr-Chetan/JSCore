// this is the object that the function is a property of

// 1: gives methods acess to their objects
// 2: execute same code for multiple objects

//console.log(this) // window

function a() {
  // console.log(this);
}

a(); // window

function b() {
  "use strict";
  // console.log(this);
}

b(); // undefined

const obj = {
  name: "chetan",
  sing: function () {
    return "Hi " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

console.log(obj.sing());
console.log(obj.singAgain());

//



function importantPerson() {
  console.log(this.name);
}

const name = "I'm become global";
const obj1 = {
  name: "chetan",
  importantPerson: importantPerson,
};
const obj2 = {
  name: "again chetan",
  importantPerson: importantPerson,
};

const tempName = new importantPerson();
tempName.name = "hello";
console.log(tempName);

importantPerson(); // undifined
obj1.importantPerson(); // chetan
obj2.importantPerson(); //again chetan

const abc = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};

abc();



const objAnother = {
  name: "billy",
  sign() {
    console.log("a", this);// point to objAnother
    var anotherFunction = function() {
      console.log("b", this); //point to window object bcz this here is not a lexical scoped
    };
    return anotherFunction();
  },
};


console.log(objAnother.sign());




// 888888888888888***************




const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
  test : function(){
    //  console.log(this.name);
     return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
 
//How Would you fix this?
console.log('answer', giveMeTheCharacterNOW());
console.log('answer2', character.test());

// task object assign
//shallow copy array ,object
//constructor
//laxical scope,
//variable scoping
//promise
//asyn await
