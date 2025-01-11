//your JS code here. If required.
const ptag = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");
btn.addEventListener("click",logic);
let value =0;
function logic(){
	alert(value);
	++value;
	ptag.textContent = value;
}