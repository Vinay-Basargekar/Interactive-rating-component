const buttons = document.querySelectorAll(".list__item");
const submit = document.querySelector(".submit");
const rating = document.querySelector(".span__value");
const card = document.querySelector("#card");
const success = document.querySelector(".success");

let value;

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		buttons.forEach((button) => button.classList.remove("list__change"));
		e.target.classList.add("list__change");
		value = e.target.textContent;
	});
});

submit.addEventListener("click", () => {
    // success.classList.add(".visible");
	rating.textContent = value;
	card.style.display = "none";
	success.style.display = "flex";
});
