//your JS code here. If required.
const ptag = document.getElementById("value");
const btn = document.getElementById("btn");
btn.addEventListener("click",logic);
let value =0;
function logic(){
	alert(value);
	++value;
	ptag.textContent = value;
}