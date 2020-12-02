
var operand2="";
var operand1=0;
var opt='+';
var result;

function calculate(operand)
{
	operand2+=operand;
	document.getElementById('result1').value=operand2;
	console.log('result');
}

function compute(operator)
{
	let result;
	switch (opt)
	{
		case "+":
		result=parseInt(parseInt(operand1) + parseInt(operand2));
		document.getElementById('result1').value=result;
		break;

		case "-":
		result=parseInt(parseInt(operand1) - parseInt(operand2));
		document.getElementById('result1').value=result;
		break;

		case "/":
		result=parseInt(parseInt(operand1) / parseInt(operand2));
		document.getElementById('result1').value=result;
		break;

		case "*":
		result=parseInt(parseInt(operand1) * parseInt(operand2));
		document.getElementById('result1').value=result;
		break;

		case "=":
		document.getElementById('result1').value=result;
		break;
	}
	operand2='';
	operand1=result;
	opt=operator;
}

function clears()
{
	document.getElementById("result1").value=" ";
	operand2="";
	operand1='0';
	opt='+';
}
