let casNaStrance = document.querySelector(".zmena")
let cislo = 0

let start = document.querySelector(".start")
start.addEventListener("click", function(){
    setInterval ( function() {
        cislo ++
        casNaStrance.textContent= cislo 
     }, 1000)
     
})
