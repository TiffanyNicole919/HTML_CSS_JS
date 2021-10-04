console.log("Javascript file connected")

function message() {
	alert("Ninja was liked");
}


function login(element) {
	if(element.innerText=="Login") {
		Element.innerText="Logout";
	}else{
		Element.innerText="login";
	
	}
}

function hide(el) {
	el.remove();

}