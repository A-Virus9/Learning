const test = document.querySelector(".test");
const test1 = document.querySelector(".test1");

console.log(getComputedStyle(test1).backgroundColor);
console.log(document.documentElement);
test1.style.setProperty("background-color", "pink");
const id1 = "id";
console.log(test1.getAttribute(id1));
console.log(test1.classList.contains("yummy"));
test1.classList.toggle("yummy");
test1.classList.toggle("yummy");

const btn = document.querySelector(".scroller");
const scrollto = document.querySelector(".target");

//implement smooth scroll
btn.addEventListener("click", (e) => {
  const coords = scrollto.getBoundingClientRect();
  console.log(coords);
  console.log(e.target.getBoundingClientRect());
  console.log(window.scrollX, scrollY);
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
//   window.scrollTo({
//     left: coords.left + window.scrollX,
//     top: coords.top + window.scrollY,
//     behavior: "smooth"
//   });
  scrollto.scrollIntoView({
    behavior: "smooth"
  })
});

//intersection observer api
const sticky  = function(entries){
  const [entry] = entries;
  console.log(entry)

  if(!entry.isIntersecting) console.log("hi");
  else console.log("bye")
};

const observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
});

observer.observe(scrollto)

//img lazy loading
const img = document.querySelectorAll("img[data-src]");

const loadImg = function(entries){
  const [entry] = entries
  
  if(!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener("load",()=>{
    entry.target.classList.remove("lazy-img")
  })
}

const imgObserver = new IntersectionObserver(loadImg,{
  root: null,
  threshold: 0,
  rootMargin: "-200px"
})

img.forEach(item => imgObserver.observe(item))

//leave window confirmation
window.addEventListener("beforeunload", (e)=>{
  e.preventDefault();
  e.returnValue = "";
})