//old way of fetching apis
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/portugal");
request.send();

request.addEventListener("load", function () {
  [data] = JSON.parse(this.responseText);
  const { borders } = data;
  console.log(borders);
});

//new way of fetching and fetch api
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/slack")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.ok);
      }
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.attachments[0].fallback);
    })
    .catch((err) => alert(err));
});

//creating promises
const lottery = new Promise(function (resolve, reject){
  console.log("Lottery draw is happening")
  setTimeout(function(){
    if(Math.random() >= 0.5){
      resolve("You Win 💰");
    }
    else{
      reject(new Error("You lost your money 💩"))
    }
  }, 2000)
})

lottery.then(res => console.log(res)).catch(err => console.error(err));

//promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 1 second");
  });

//instant promises
Promise.resolve("Resolved").then(x => console.log(x))
Promise.reject("Rejected").catch(x => console.error(x))

//promisifying geolocation api
const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

getPosition().then(pos => console.log(pos))

//async-await 
const position = async function(){
  const pos = await getPosition()
  const jokeData  = await fetch("https://icanhazdadjoke.com/slack")
  const jokeResolved = await jokeData.json()
  const joke = jokeResolved.attachments[0].fallback
  const {coords: {latitude: lat, longitude: lng}} = pos
  console.log(lat, lng, joke)
}
position();

//try-catch
try{
  const x=2;
  x=3;
}
catch(err){
  console.error(err)
}

//returning value from a async function
const test = async function(){
  return "HI"
}
test().then(msg => console.log(msg))

//running promises in parallel and all combinator
const joker = async function(resolve){
  const resData = await fetch("https://icanhazdadjoke.com/slack")
  const resResolved = await resData.json();
  console.log(resResolved.attachments[0].fallback)
}

const paraTest = async function(){
  const data = await Promise.all([
    joker(),
    joker(),
    joker()
  ]);
}
paraTest()

const allTest = async function(){
  const data = await Promise.all([
    fetch("https://restcountries.com/v2/name/portugal"),
    fetch("https://restcountries.com/v2/name/portugal"),
    fetch("https://restcountries.com/v2/name/portugal"),
  ]);
  data.map(d => {
    console.log(d)
  })
}
allTest()

//race/ too long to respond
const timeout = function(sec){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error("Request took too long!"));
    }, sec * 1000)
  })
}

Promise.race([
  fetch("https://restcountries.com/v2/name/portugal"),
  timeout(.09)
]).then(res => console.log(res)).catch(err => console.log(err))

//allSettled / any
const allSettledTest = async function(){
  const data = await Promise.allSettled([
    fetch("https://restcountries.com/v2/name/portugal"),
    fetch("https://restcountries.com/v2/name/portugal"),
    fetch("https://restcountries.com/v2/name/port"),
  ]);
  data.map(d => {
    console.log(d)
  })
}
allSettledTest()

const anyTest = async function(){
  const data = await Promise.any([
    fetch("https://restcountries.com/v2/name/portu"),
    fetch("https://restcountries.com/v2/name/portugal"),
    fetch("https://restcountries.com/v2/name/port"),
  ]);
  console.log(data)
}
anyTest()

// promise test
const promise = function(){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      // resolve("yo")
      reject("yo")
    },1000)
  })
}

// const yo = async function(){
//   try{
//     console.log("Starting")
//     const data1 = await promise()
//     console.log("first complete")
//     const data2 = await promise()
//     console.log("second complete")
//     const data3 = await promise()
//     console.log("all complete")
//     console.log(data1, data2, data3)
//   }
//   catch(err){
//     console.error(err)
//   }
// }
// yo()

const yo = async function(){
  const bye = await Promise.allSettled([
  promise(),
  promise(),
  promise()
])
.then(res => console.log(res))
.catch(err => console.log(err))
}
yo()