let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let list = document.getElementById("list");

// Add counter for the limit
let number = 0;
let info = "You have reached the limit!";

// Return input value length from input tag
function inputLength() {
	return input.value.length;
}

// Create list element and set the toggle done class and delete button
function createListElement() {
		let newli = document.createElement("li");
		newli.appendChild(document.createTextNode(input.value));
		setLi(newli);
		ul.appendChild(newli);
		input.value = "";
}

// Add list after click 
function addListAfterClick() {
	if (inputLength() > 0 && number < 10) {
		createListElement();
	} else if (inputLength() > 0 && number >= 10) {
		alert(info);
		input.value = "";
	}
}

// Add list after press enter
function addListAfterKeypress(event) {
	if ((inputLength() > 0 && event.keyCode === 13) && number < 10) {
		createListElement();
	} else if ((inputLength() > 0 && event.keycode === 13) && number >= 10) {
		alert(info);
		input.value = "";
	}
}

// Make checklist sign
function createChecklist() {
	let checklist = document.createElement("span");
	checklist.innerHTML = "&#x2714;";
	checklist.classList.add("chlist");
	checklist.style.display = "none";
	return checklist;
}

// Add checklist sign to li
function addCheckList(item) {
	item.appendChild(createChecklist());
}

// Make toggle class done and toggle for checklist sign
function addToggleDone(item) {
	item.currentTarget.classList.toggle("done");
	let cl = item.currentTarget.firstElementChild;
	if (cl.style.display === "none") {
		cl.style.display = "inline-block";
	} else {
		cl.style.display = "none";
	}
}

// Add click even for toggle
function toggleDone(item) {
	item.addEventListener("click", addToggleDone);
}

// remove li
function removeLi(item) {
	item.currentTarget.parentElement.parentElement.removeChild(item.currentTarget.parentElement);
	number - 1;
}

// Make delete button
function createDeleteButton() {
	let btn = document.createElement("button");
	let del = "Delete";
	btn.appendChild(document.createTextNode(del));
	btn.classList.add("btn-del");
	btn.addEventListener("click", removeLi);
	return btn;
}

// Add del button to li item
function deleteButton(item) {
	item.appendChild(createDeleteButton());
}

// Initiate toggle done class and delete button
function setLi(item) {
	addCheckList(item);
	deleteButton(item);
	toggleDone(item);
	number + 1;
}

li.forEach(setLi);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
