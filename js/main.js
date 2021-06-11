const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let timeoutId;
let elapsedTime=0;

function startonly(){
  start.classList.remove("inactive");
  stop.classList.add("inactive");
  reset.classList.add("inactive");
}

function stoponly(){
  start.classList.add("inactive");
  stop.classList.remove("inactive");
  reset.classList.add("inactive");
}

function startreset(){
  start.classList.remove("inactive");
  stop.classList.add("inactive");
  reset.classList.remove("inactive");
}

function countUp(){
  const d = new Date(Date.now()-startTime+elapsedTime);
  const m=String(d.getMinutes()).padStart(2,"0");
  const s=String(d.getSeconds()).padStart(2,"0");
  const ms=String(d.getMilliseconds()).padStart(3,"0");
  timer.textContent = m+":"+s+":"+ms;
  
  
  timeoutId = setTimeout(()=>{
    countUp();
  },10)
}

 startonly();

start.addEventListener("click",()=>{
  if(start.classList.contains("inactive")){
    return;
  }
  startTime= Date.now();
  countUp();
  stoponly();
})

stop.addEventListener("click",()=>{
  if(stop.classList.contains("inactive")){
    return;
  }
  clearTimeout(timeoutId);
  elapsedTime=Date.now()-startTime+elapsedTime;
  startreset();
})

reset.addEventListener("click",()=>{
  if(reset.classList.contains("inactive")){
    return;
  }
  timer.textContent="00:00:000";
  elapsedTime=0;
  startonly();
})


