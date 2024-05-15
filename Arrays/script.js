//Slice, Splice, Reverse, Concat, Join and At
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.slice(3,7));
console.log(arr.slice(-5));
console.log(arr.splice(3));
console.log(arr)
arr = [1,2,3,4,5,6,7,8,9];
arr2 = [10, 11, 12, 13, 14, 15, 16, 17];
console.log(arr.reverse());
console.log(arr);
console.log(arr.concat(arr2));
console.log(arr, arr2);
console.log(arr.join("-"));
console.log(arr.at(-3))

//forEach and for..of
arr = [1,2,3,4,5,6,7,8,9];
arr.forEach((val,iterCount,arr)=>{
  if(val%2)
    console.log("Hi",iterCount,arr)
  else
    console.log("Bye",iterCount,arr);
})
console.log("---for..of---")
for(const [i,val] of arr.entries()){
  if(val%2)
    console.log("Hi",i)
  else
    console.log("Bye",i);
}
let set1 = new Set(arr);
set1.forEach((val,i,set)=>{
  if(val%2) 
    console.log("Hi",i,set)
  else
    console.log("Bye",i,set);
})
let map1 = new Map();
arr.forEach((val,iterCount)=>{
  map1.set(iterCount,val);
})
map1.forEach((val,key)=>{
  console.log(`${key}: ${val}`);
})

//map method
let oneToTen = [1,2,3,4,5,6,7,8,9];
evens = oneToTen.map((val,i,arr)=>{
  return val*2;
})
console.log(evens);

//filter method
oneToTen = [1,2,3,4,5,6,7,8,9]
evens = oneToTen.filter((item,i,arr) =>{
  console.log(item)
  return item%2==0
})
console.log(evens);

//reduce method
oneToTen = [1,2,3,4,5,6,7,8,9]
const sum = oneToTen.reduce((acc,cur,i,arr) =>{
  console.log(acc,cur)
  return acc+cur;
},0)// this zero is initial value of acc
console.log(sum)

//find method
oneToTen = [1,2,3,4,5,6,7,8,9]
const some = oneToTen.findIndex((item,i,arr) =>{
  return item>6;
})
console.log(some,oneToTen)

//includes, some and every
console.log(oneToTen.includes(4))
console.log(oneToTen.some(item => item % 3 ==0 ))
console.log(oneToTen.every(item => item % 3 ==0 ))

//flat and flatmap
let unflat = [[1,2],[3,[4,[5]]],6,7]
console.log(unflat.flat(3))

//sort(if return < 0 => keep order , if return > 0 => switch order)
let jumbled = [5,2,7,1,9,3,6,4,8]
console.log(jumbled.sort((a,b) => a>b?1:-1))

//ways to create arrays
console.log(new Array(1,2,3,4,5,6,7,8,9));
const x = new Array(9);
console.log(x.fill(3,3,6))
const y = Array.from({length: 9}, (_,i) => i+1);
console.log(y)