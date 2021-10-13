console.log("javascript is connected");

let numCount = 9
let h2 = document.querySelector("#h2")
function like_post_1() {
	numCount++
	h2.innerText = numCount
}

let sumCount = 12
let h3 = document.querySelector("#h3")
function like_post_2() {
	console.log(sumCount)
	sumCount++
	h3.innerText = sumCount
}

let yumCount = 9
let h4 = document.querySelector("#h4")
function like_post_3() {
	yumCount++
	h4.innerText = yumCount
}
