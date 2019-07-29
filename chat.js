
//����� ����
const greenButton = document.getElementById("theme_green");
greenButton.addEventListener("click", changeThemetoGreen);
const blueButton = document.getElementById("theme_blue");
blueButton.addEventListener("click", changeThemetoBlue);
const yellowButton = document.getElementById("theme_yellow");
yellowButton.addEventListener("click", changeThemetoYellow);

console.log("A'B" + 100);
console.log("200" + 100);
console.log("A'B" * 100);
console.log("1" * 2);
console.log(true + 1);
console.log(true + false);
console.log(true + true);

try {
	addAlert("hello world");
}
catch(err) {
	console.log(err.message);
}

var obj3 = {val1: "trash", val2: "JavaScript"};
var obj4 = {"val1": "trash", val2: "JavaScript"};
var obj5 = {"val1": 'trash', val2: "JavaScript"};

console.log(obj3);
console.log(obj4);
console.log(obj5);

var newTest;
console.log(typeof(newTest));

console.log(100 * "200");

//������ ����
function changeThemetoGreen(evnt) {
	let elems = document.getElementsByClassName("Theme_Blue");
	if (elems.length === 0) {
		elems = document.getElementsByClassName("Theme_Yellow");
		for (let i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.add("Theme_Green");
			elems[i].classList.remove("Theme_Yellow");
		};
		yellowButton.disabled = false;
		yellowButton.classList.remove("pushedButton");
	}
	else {
		for (let i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.add("Theme_Green");
			elems[i].classList.remove("Theme_Blue");
		};
		blueButton.disabled = false;
		blueButton.classList.remove("pushedButton");
	}
	greenButton.disabled = true;
	greenButton.classList.add("pushedButton");
}

//����� ����
function changeThemetoBlue(evnt) {
	let elems = document.getElementsByClassName("Theme_Green");
	if (elems.length === 0) {
		elems = document.getElementsByClassName("Theme_Yellow");
		for (let i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.add("Theme_Blue");
			elems[i].classList.remove("Theme_Yellow");
		};
		yellowButton.disabled = false;
		yellowButton.classList.remove("pushedButton");
	}
	else {
		for (let i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.add("Theme_Blue");
			elems[i].classList.remove("Theme_Green");
		};
		greenButton.disabled = false;
		greenButton.classList.remove("pushedButton");
	}
	blueButton.disabled = true;	
	blueButton.classList.add("pushedButton");
}

//Ƹ���� ����
function changeThemetoYellow(evnt) {
	let elems = document.getElementsByClassName("Theme_Blue");
	if (elems.length === 0) {
		elems = document.getElementsByClassName("Theme_Green");
		for (let i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.add("Theme_Yellow");
			elems[i].classList.remove("Theme_Green");
		};
		greenButton.disabled = false;
		greenButton.classList.remove("pushedButton");
	}
	else {
		for (let i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.add("Theme_Yellow");
			elems[i].classList.remove("Theme_Blue");
		};
		blueButton.disabled = false;
		blueButton.classList.remove("pushedButton");
	}
	yellowButton.disabled = true;
	yellowButton.classList.add("pushedButton");	
}

//����� ������
const arialButton = document.getElementById("font_arial");
arialButton.addEventListener("click", changeFonttoArial);
const georgiaButton = document.getElementById("font_georgia");
georgiaButton.addEventListener("click", changeFonttoGeorgia);
const courierButton = document.getElementById("font_courier");
courierButton.addEventListener("click", changeFonttoCourier);

//Arial
function changeFonttoArial(evnt) {
	let elem = document.getElementsByTagName("body");
	elem[0].classList.add("Font_Arial");
	for (let i = 0; i < elem[0].classList.length; i++) {
		if (elem[0].classList.contains("Font_Georgia")) {
			elem[0].classList.remove("Font_Georgia");
			georgiaButton.disabled = false;
			georgiaButton.classList.remove("pushedButton");
			break;
		}
		else {
			elem[0].classList.remove("Font_Courier");
			courierButton.disabled = false;
			courierButton.classList.remove("pushedButton");
			break;
		}
	}
	arialButton.disabled = true;
	arialButton.classList.add("pushedButton");	
}

//Georgia
function changeFonttoGeorgia(evnt) {
	let elem = document.getElementsByTagName("body");
	elem[0].classList.add("Font_Georgia");
	for (let i = 0; i < elem[0].classList.length; i++) {
		if (elem[0].classList.contains("Font_Arial")) {
			elem[0].classList.remove("Font_Arial");
			arialButton.disabled = false;
			arialButton.classList.remove("pushedButton");
			break;
		}
		else {
			elem[0].classList.remove("Font_Courier");
			courierButton.disabled = false;
			courierButton.classList.remove("pushedButton");
			break;
		}
	}
	georgiaButton.disabled = true;
	georgiaButton.classList.add("pushedButton");	
}

//Courier
function changeFonttoCourier(evnt) {
	let elem = document.getElementsByTagName("body");
	elem[0].classList.add("Font_Courier");
	for (let i = 0; i < elem[0].classList.length; i++) {
		if (elem[0].classList.contains("Font_Georgia")) {
			elem[0].classList.remove("Font_Georgia");
			georgiaButton.disabled = false;
			georgiaButton.classList.remove("pushedButton");
			break;
		}
		else {
			elem[0].classList.remove("Font_Arial");
			arialButton.disabled = false;
			arialButton.classList.remove("pushedButton");
			break;
		}
	}
	courierButton.disabled = true;
	courierButton.classList.add("pushedButton");	
}
