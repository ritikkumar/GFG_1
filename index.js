
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
   console.log(count)
}


function save() {
 let countStr = count + " - "
 saveEl.innerText += countStr
 console.log(count)
}
