const restaurent = {
  name:  "Nayvedyam",
  age: 18,
  city: "jaipur",
  obj: {
    fri: {
      open: 12,
      close: 56,
    },
    sat: {
      open: 45,
      close: 23,
    },
    sun: {
      open:56,
      close: 12,
    }
  },
  entries: function(){
    return Array.from({length:20},(_,i)=>i+1);
  },
  add: (a,b) =>{
    return a+b;
  }
}

const entries = Object.entries(restaurent.obj);

//Arrays/Object destructuring and for-of loop iterations
for (const [key, {open, close}] of entries){
  console.log(`We open on ${open} and close on ${close} on ${key}`);
}

//Optional Chaining and Short Circuiting
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for(const item of weekdays){
  const openV = restaurent.obj[item]?.close ?? "closed";
  console.log(openV);
}

console.log(restaurent.add?.(5,6) ?? "Method not present");
console.log(restaurent.sub?.(5,6) || "Method not present");

//Sets
const ordSet = new Set(["pizza", 1, "yo", "yo", 1, 2, "pizza"]);
console.log(ordSet);
console.log(ordSet.size);
console.log(ordSet.has("yo"));
ordSet.add("hi");
ordSet.delete("pizza");
ordSet.clear();

const arr = ["pizza", 1, "yo", "yo", 1, 2, "pizza"];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);


//Maps
const rest = new Map();
rest.set("Name", "Akshat");
rest.set(1, "Italy");
rest.set(true, false);
rest.set("arr", ["1", "2", "3"]).set("open", 11).set("close" ,23);
console.log(rest.get(true))
console.log(rest.has("Name"))
rest.delete("Name");
console.log(rest);
console.log(rest.size);
const arr2 = [3,4];
rest.set(arr2, "Test");
console.log(rest.get(arr2))

//Map iteration
const yo = new Map(Object.entries(restaurent.obj));
console.log(yo);
for(const [key, {open:o, close:c}] of yo){
  console.log(`We open at ${o} and close at ${c} on ${key}`)
}
console.log([...rest.entries()])

//String Functions
const alpha = "yo+hii+ama+ksh+at";
console.log(alpha.slice(-1,-2))
console.log(alpha.includes("iiam"))
console.log(alpha.split("+"))

console.log(["hi", "akshat", 1].join(' + '))

const capi = (names) => {
  return names[0].toUpperCase() + names.slice(1);
}

console.log(capi("akshat"));
console.log(alpha.padEnd(25, "+"));