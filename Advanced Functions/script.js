//Default parameters
const booking = function (num, pass, price = 199 * num) {
    console.log(
      `Out of ${pass} passengers, each passenger will pay $${price} in flight number ${num}`
    );
  };
  
  booking(12, 13, 14);
  booking(15, 16, false);
  
  //First class / Higher order functions
  const remSpa = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
  };
  const upperFirst = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
  };
  const transformer = function (str, fn) {
    console.log(
      `${fn(str)} is the final transformed string transformed by the function ${
        fn.name
      }`
    );
  };
  transformer("JS is the best!", upperFirst);
  transformer("JS is the best!", remSpa);
  
  //Returning function from functions
  const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };
  // With arrow function => ((const greet = greeting => name => console.log(greeting + " " + name);))
  const heyGreeter = greet("Hey");
  heyGreeter("byas");
  greet("hey")("byas");
  
  //Call and apply methods
  const vistara = {
    airline: "Vistara",
    iatacode: "UK",
    bookings: [],
  
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iatacode}-${flightNum}`
      );
      this.bookings.push({ flight: `${this.iatacode}-${flightNum}`, name });
    },
  };
  const indigo = {
    airline: "Indigo",
    iatacode: "6E",
    bookings: [],
    planes: 300,
  
    buyplanes(num){
      this.planes+=num;
      console.log(this.planes);
    }
  }
  const swiss = {
    airline: "Swiss",
    iatacode: "SW",
    bookings: [],
  }
  
  vistara.book(231, "Sarah");
  vistara.book(768, "Richard");
  console.log(vistara.bookings);
  const book = vistara.book;
  book.call(indigo, 71, "Akshat");
  const flightData = [112, "Byas"];
  book.apply(swiss, flightData); //apply not used now in javascript as we can use the spread operator in the call method to do the same
  book.call(swiss, ...flightData);
  
  //Bind method
  const book6e = book.bind(indigo);
  book6e(23, "yolo");
  const bookSw = book.bind(swiss, 45);
  bookSw("hat");
  
  document.querySelector(".buy").addEventListener("click", indigo.buyplanes.bind(indigo, 5));
  
  // const add = (num1, num2) => console.log(num1 + num2);
  const add = function(num1, num2){
    console.log(num1 + num2);
  }
  const bindNum2 = add.bind(null, 23);
  bindNum2(34);
  
  //Immediately Invoked Functions
  (function(){
    console.log("Hi");
  })();
  
  (()=>{
    console.log("Hi");
  })();
  
  //Closures
  const secureBooking = function(){
    let passengerCount = 0;
  
    return function(){
      passengerCount++;
      console.log(passengerCount);
    }
  }
  const booker = secureBooking();
  booker();
  booker();
  booker();