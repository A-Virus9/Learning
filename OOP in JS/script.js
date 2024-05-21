//Constructor Functions
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function(){
    console.log(2026 - this.birthYear)
  }
}

const jonas = new Person("Akshat",19)
console.log(jonas.__proto__)

//prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function(){
  console.log(2024 - this.birthYear)
}

jonas.calcAge()
console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype)
console.log(jonas.__proto__.isPrototypeOf(jonas))

Person.prototype.species = "Homo Sapiens"
console.log(jonas.species)

console.log(jonas.hasOwnProperty("firstName"))
console.log(jonas.hasOwnProperty("species"))
console.log(jonas.__proto__)
console.log(Person.prototype)


//classes
class yo {
  constructor(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }

  calcAge(){
    console.log(2037 - this.birthYear)
  }

  set firstName(name){
    if(name.includes(" ")) alert(`${name} this is full name!`)
    else this._firstName = name
  }

  get firstName(){
      return this._firstName
  }

  static hey(){
    console.log("Hi bro!")
  }

  #yolo = 1234;

  getYolo(){
    return this.#yolo;
  }
}

const jessica = new yo("Jessica", 1996);
console.log(jessica)
jessica.calcAge()

console.log(jessica.__proto__ === yo.prototype)

yo.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`)
}
jessica.greet();

//setters and getters 
const account = {
  owner: "Akshat",
  movements: [100, -200, 300, -400],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov)
  }
}

console.log(account.latest);
account.latest = 50
console.log(account)

const john = new yo("gugugaga", 1997);// check in the class above
console.log(john);

//Static methods
yo.hey()
// jessica.hey()

//Object.create
const obj ={
  calcAge(){
    console.log(2037 - this.birthYear)
  },

  init(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(obj);
console.log(steven)
steven.name = "Steven"
steven.birthYear = 1989
steven.calcAge();

console.log(steven.__proto__ === obj)

const sarah = Object.create(obj)
sarah.init("Sarah",1979);
console.log(sarah)

//private members
console.log(jessica.getYolo())
   // console.log(jessica.#yolo) => this doesnt work