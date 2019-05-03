var investmentP = 0;
var foodP = 0;
var miscP = 0;


function el(id) {
    var element = document.getElementById(id);
    return element;
}

function calculate() {
    // calculate the 3%, 5%, and 10%
    var OldVal = el("myNum").value;
    val = parseInt(OldVal);
    if (val >= 0) {
        investment = (investmentP * 0.01) * val;
        food = (foodP * 0.01) * val;
        misc = (miscP * 0.01) * val;
        var rest = val - (investment + food + misc);
        // var newVal = [three, five, ten, rest];

        el("orig").innerHTML = val;
        el("10p").innerHTML = investment;
        el("5p").innerHTML = food;
        el("3p").innerHTML = misc;
        el("diff").innerHTML = rest;
    }
    else if (OldVal == "") {
        el("orig").innerHTML = "";
        el("10p").innerHTML = "";
        el("5p").innerHTML = "";
        el("3p").innerHTML = "";
        el("diff").innerHTML = "";
    }
    else{
		Swal.fire("Invalid Input!","Please Enter Positive Values", "warning");
       
    }
}

function saveSettings(){
	set_investment = parseInt(el("investment").value);
	set_food = parseInt(el("food").value);
	set_misc = parseInt(el("misc").value);

	var total_set = set_investment + set_food + set_misc;

	if (total_set <= 100) {
		investmentP = set_investment;
		foodP = set_food;
		miscP = set_misc;

		Swal.fire("Success!","Settings Changed", "success");
	}
	else{
		Swal.fire("Invalid Settings!","Please input percentage below 100", "warning");
	}
}



function main(){
	calculate();
}