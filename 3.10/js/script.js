const add = document.querySelector("#add");
const mul = document.querySelector("#mul");
let counter = document.querySelector("#counter");
let num = Number(counter.textContent);
function operations(operation) {
	if (operation == "add") {
		num += 1;
		console.log(num);
	} else {
		num *= 2;
		console.log(num);
	}
	counter.textContent = num;
}
add.addEventListener("click", () => operations("add"));
mul.addEventListener("click", () => operations("mul"));
