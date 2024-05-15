//basic number functions
console.log(23===23.0)
console.log(.1+.2)//javascript error coz ans = 0.3
console.log(Number("23"))
console.log(+"23")
console.log(1+ +"1")
console.log(Number.parseInt("045px",10))
console.log(Number.parseFloat("3.676ok"))
console.log(23/0)
console.log(Number.isNaN(20))
console.log(Number.isNaN("20"))
console.log(Number.isNaN(+"20x"))
console.log(Number.isNaN(20/0))
console.log(Number.isFinite(20))
console.log(Number.isFinite("20"))
console.log(Number.isFinite(+"20x"))
console.log(Number.isFinite(20/0))
console.log(Number.isInteger(12))
console.log(+2.55.toFixed(1))

//numeric seperators
const radius = 125_66.6_5;
console.log(radius)
console.log(Number("34_67"))//NaN

//Internationalizing dates and numbers
const options ={
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "short",
  year: "numeric",
  weekday: "long"//short
}
console.log(new Intl.DateTimeFormat(navigator.language,options).format(new Date()))
const numOptions ={
    style: "currency",//unit, percent
    unit: "liter",//celsius, //mile-per-hour
    unitDisplay: "long",//short, narrow
    currency: "USD"
}
const num = 2222.5434
console.log(new Intl.NumberFormat(navigator.language,numOptions).format(num))
console.log(navigator.language)