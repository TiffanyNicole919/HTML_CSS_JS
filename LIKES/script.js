console.log("javascript is connected")

let numCount = 3
let count = document.querySelector("#count")
function addlike() {
	numCount++
	console.log(numCount)
	count.innerText = numCount
}