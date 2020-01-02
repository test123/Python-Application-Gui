function operate(operator) {
	var num1 = document.querySelector('#num-1').value;
	var num2 = document.querySelector('#num-2').value;
	resultLambda = operator(num1, num2);
	resultLambda(result => {
		document.querySelector('#output').innerText = result;
	});
}
