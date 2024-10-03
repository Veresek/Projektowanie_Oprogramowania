const btn = document.querySelector("#btn");
let counter = document.querySelector("#counter");
let num = 0;
btn.addEventListener("click", () => {
	num += 1;
	counter.textContent = num;
});
