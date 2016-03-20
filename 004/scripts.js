var outputString = "";
var equation;

$(".number_button, .operation_button").click(function(){
	outputString += $(this).text();
	$(".output").val(outputString);
	console.log(outputString);
});

$(".all_clear").click(function(){
	outputString = "";
	$(".output").val(outputString);
	equation = 0;
});

$(".backspace").click(function(){
	var backString = outputString.split("");
	backString.pop();
	outputString = backString.join("");
	$(".output").val(outputString);
});

$(".equals").click(function(){
	if (isNaN(eval(outputString)) === false){
		equation = eval(outputString);
		$(".output").val(equation);
	} else {
		$(".output").val("Not a number");
	};
});
