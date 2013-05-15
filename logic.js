(function (){
	var firstNumber = 0;
	var floatNumber = false;
	var level = 0;
	var operator = "";
	var row = 0;
	var secondNumber = 0;
	//If the operation is selected it also means that the first number is already introduced
	var selectedOperation = "none";

	//a -> 97  -> green
	//w -> 119 -> blue
	//d -> 100 -> red
	//s -> 115 -> yellow
	//z -> 122 -> black
	//x -> 120 -> white
	function addChar(addedChar){
		document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+addedChar;
	}

	function getNumber(){
		returnedValue = document.getElementById("result").innerHTML;
		document.getElementById("result").innerHTML = "";
		return returnedValue;
	}

	function handleButtonPress(event){
		var colorPressed = "";
		switch(event.charCode){
			case 97:
				colorPressed = "green";
				break;
			case 119:
				colorPressed = "blue";
				break;
			case 100:
				colorPressed = "red";
				break;
			case 115:
				colorPressed = "yellow";
				break;
			case 122:
				colorPressed = "black";
				break;
			case 120:
				colorPressed = "white";
				break;				
		}

		if(colorPressed != ""){
			nextMove(colorPressed);
		}
	}

	function nextMove(colorPressed){
		if(level == 0 || (level == 1 && row == 0)){
			if(colorPressed == "green"){
				selectRow(1);
			}else if(colorPressed == "blue"){
				selectRow(2);
			}else if(colorPressed == "red"){
				selectRow(3);
			}else if(level == 1 && colorPressed == "yellow"){
				if(selectedOperation == "none"){
				level=2;
				setColours();
				//It is time to select operations!
				}else{
					level=3;
					setColours();
				}
			}
		}else if(level == 1 && row != 0){
			selectNumber(colorPressed);
		}else if(level == 2){
			if(colorPressed == "green"){
				selectedOperation = "division";
			}else if(colorPressed == "blue"){
				selectedOperation = "addition";
			}else if(colorPressed == "red"){
				selectedOperation = "multiplication";	
			}else if(colorPressed == "yellow"){
				selectedOperation = "substraction";
			}
			firstNumber = getNumber();
			floatNumber = false;
			level = 0;
			setColours();
		}else if(level == 3){
			if(colorPressed == "white"){
				alert("Deleting");
			}else if(colorPressed == "black"){
				//It's time to operate!!!
				secondNumber = getNumber();
				operate();
			}
		}
	}

	function operate(){
		first = parseFloat(firstNumber);
		second = parseFloat(secondNumber);
		result = 0.0;
		switch(selectedOperation){
			case "addition":
				result = first+second;
				break;
			case "substraction":
				result = first-second;
				break;
			case "multiplication":
				result = first*second;
				break;
			case "division":
				if(second == 0){
					alert("DON'T DIVIDE BY 0!!! GAUSS FORBIDS IT!!!")
				}else{
					result = first/second;
				}
				break;
		}
		document.getElementById("result").innerHTML = result+"";
	}

	function selectNumber(colorPressed){
		if(row == 1){
			switch(colorPressed){
				case "blue":
					addChar("7");
					level = 1;
					row = 0;
					setColours();
					break;
				case "green":
					addChar("4");
					level = 1;
					row = 0;
					setColours();
					break;
				case "red":
					addChar("1");
					level = 1;
					row = 0;
					setColours();
					break;
				case "yellow":
					addChar("0");		
					level = 1;
					row = 0;
					setColours();
					break;
			}
		}else if(row == 2){
			switch(colorPressed){
				case "blue":
					addChar("8");
					level = 1;
					row = 0;
					setColours();
					break;
				case "green":
					addChar("5");
					level = 1;
					row = 0;
					setColours();
					break;
				case "red":
					addChar("2");
					level = 1;
					row = 0;
					setColours();
					break;
				case "yellow":
				if (floatNumber == false){
					if(document.getElementById("result").innerHTML == ""){
						addChar("0.");	
					}else{
						addChar(".");
					}
					level = 0;
					row = 0;
					floatNumber = true;
					setColours();
					break;
				}
			}
		}else if(row == 3){
			switch(colorPressed){
				case "blue":
					addChar("9");
					level = 1;
					row = 0;
					setColours();
					break;
				case "green":
					addChar("6");
					level = 1;
					row = 0;
					setColours();
					break;
				case "red":
					addChar("3");
					level = 1;
					row = 0;
					setColours();
					break;
				case "yellow":
					document.getElementById("result").innerHTML = "-"+document.getElementById("result").innerHTML;		
					level = 1;
					row = 0;
					setColours();
					break;
			}
		}
	}

	function selectRow(number){
		for (var i = 0; i < document.querySelectorAll(".button").length; i++){
			document.querySelectorAll(".button")[i].className = "button dark";	
		}
		switch(number){
			case 1:
				document.querySelector("#button7").className = "button blue";
				document.querySelector("#button4").className = "button green";
				document.querySelector("#button1").className = "button red";
				document.querySelector("#button0").className = "button yellow";
				level = 1;
				row = 1;
				break;
			case 2:
				document.querySelector("#button8").className = "button blue";
				document.querySelector("#button5").className = "button green";
				document.querySelector("#button2").className = "button red";
				document.querySelector("#buttonDot").className = "button yellow";
				level = 1;
				row = 2;
				break;
			case 3:
				document.querySelector("#button9").className = "button blue";
				document.querySelector("#button6").className = "button green";
				document.querySelector("#button3").className = "button red";
				document.querySelector("#buttonNeg").className = "button yellow";
				level = 1;
				row = 3;
				break;
		}
	}

	function setColours(){
		switch(level){
			case 0: //Beggining the introduction of a number
		  		//First row
				document.querySelector("#button7").className = "button green";
				document.querySelector("#button4").className = "button green";
				document.querySelector("#button1").className = "button green";
				document.querySelector("#button0").className = "button green";
				//Second row
				document.querySelector("#button8").className = "button blue";
				document.querySelector("#button5").className = "button blue";
				document.querySelector("#button2").className = "button blue";
				document.querySelector("#buttonDot").className = "button blue";
				//Third row
				document.querySelector("#button9").className = "button red";
				document.querySelector("#button6").className = "button red";
				document.querySelector("#button3").className = "button red";
				document.querySelector("#buttonNeg").className = "button red";
				//Operations 
				document.querySelector("#buttonPlus").className = "button dark";
				document.querySelector("#buttonDivide").className = "button dark";
				document.querySelector("#buttonMult").className = "button dark";				
				document.querySelector("#buttonMinus").className = "button dark";
				document.querySelector("#buttonDel").className = "button dark";
				document.querySelector("#buttonEqual").className = "button dark";
  				break;
			case 1: //First digit introduced
		  		//First row
				document.querySelector("#button7").className = "button green";
				document.querySelector("#button4").className = "button green";
				document.querySelector("#button1").className = "button green";
				document.querySelector("#button0").className = "button green";
				//Second row
				document.querySelector("#button8").className = "button blue";
				document.querySelector("#button5").className = "button blue";
				document.querySelector("#button2").className = "button blue";
				document.querySelector("#buttonDot").className = "button blue";
				//Third row
				document.querySelector("#button9").className = "button red";
				document.querySelector("#button6").className = "button red";
				document.querySelector("#button3").className = "button red";
				document.querySelector("#buttonNeg").className = "button red";
				//Operations 
				if(selectedOperation == "none"){
					document.querySelector("#buttonPlus").className = "button yellow";
					document.querySelector("#buttonDivide").className = "button yellow";
					document.querySelector("#buttonMult").className = "button yellow";				
					document.querySelector("#buttonMinus").className = "button yellow";
				}else{
					document.querySelector("#buttonPlus").className = "button dark";
					document.querySelector("#buttonDivide").className = "button dark";
					document.querySelector("#buttonMult").className = "button dark";				
					document.querySelector("#buttonMinus").className = "button dark";
				}
				document.querySelector("#buttonDel").className = "button yellow";
				document.querySelector("#buttonEqual").className = "button yellow";
				break;
			case 2: //Selection of operation
				//Numbers
				document.querySelector("#button7").className = "button dark";
				document.querySelector("#button4").className = "button dark";
				document.querySelector("#button1").className = "button dark";
				document.querySelector("#button0").className = "button dark";
				document.querySelector("#button8").className = "button dark";
				document.querySelector("#button5").className = "button dark";
				document.querySelector("#button2").className = "button dark";
				document.querySelector("#buttonDot").className = "button dark";
				document.querySelector("#button9").className = "button dark";
				document.querySelector("#button6").className = "button dark";
				document.querySelector("#button3").className = "button dark";
				document.querySelector("#buttonNeg").className = "button dark";
				//Operations 
				document.querySelector("#buttonPlus").className = "button blue";
				document.querySelector("#buttonDivide").className = "button green";
				document.querySelector("#buttonMult").className = "button red";
				document.querySelector("#buttonMinus").className = "button yellow";
				document.querySelector("#buttonDel").className = "button white";
				document.querySelector("#buttonEqual").className = "button black";
  				break;  				
  			case 3:	
				//Numbers
				document.querySelector("#button7").className = "button dark";
				document.querySelector("#button4").className = "button dark";
				document.querySelector("#button1").className = "button dark";
				document.querySelector("#button0").className = "button dark";
				document.querySelector("#button8").className = "button dark";
				document.querySelector("#button5").className = "button dark";
				document.querySelector("#button2").className = "button dark";
				document.querySelector("#buttonDot").className = "button dark";
				document.querySelector("#button9").className = "button dark";
				document.querySelector("#button6").className = "button dark";
				document.querySelector("#button3").className = "button dark";
				document.querySelector("#buttonNeg").className = "button dark";
				//Operations 
				document.querySelector("#buttonPlus").className = "button dark"
				document.querySelector("#buttonDivide").className = "button dark"
				document.querySelector("#buttonMult").className = "button dark"
				document.querySelector("#buttonMinus").className = "button dark"
				document.querySelector("#buttonDel").className = "button white";
				document.querySelector("#buttonEqual").className = "button black";
				break;
		}
	};

	setColours();
	addEventListener("keypress", handleButtonPress,false);
})();