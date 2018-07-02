function createBtn() {
	
	let divElement = document.createElement('div');
	divElement.id = 'clickMeContainer';
	document.body.append(divElement);
	
	let mydiv = document.getElementById('clickMeContainer');
	let aTag = document.createElement('a');
	aTag.id = 'clickMe';
	aTag.setAttribute('href','javascript:void(0)');
	
	aTag.setAttribute('onclick','javascript:showCircle()');
	
	aTag.innerHTML = 'Click Me';
	mydiv.appendChild(aTag);

}
async function showCircle() {
	document.getElementById('clickMe').setAttribute('style','pointer-events:none;cursor:default;');
	if(document.getElementById('circle') != null) removeElement('circle');
	
	let divElement1 = document.createElement('div');
	divElement1.id = 'circle';
	divElement1.className = 'circle';
	document.body.append(divElement1);
	
	
	
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));
	await showText();
	
}
async function showText() {
	let circleDiv = document.getElementById('circle');
	let circleDivInner = document.createElement('div');
	circleDivInner.className = 'circleInnerText';
	circleDivInner.innerHTML = 'Hello, World';
	circleDiv.appendChild(circleDivInner);
	
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));
	circleDivInner.remove();
	
	await new Promise((resolve, reject) => setTimeout(resolve, 1000));
	circleDiv.remove();
	document.getElementById('clickMe').setAttribute('style','pointer-events:auto;cursor:pointer;');
}

function removeElement(elementId) {
	var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

createBtn();



