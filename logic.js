(function (){
	var aboutCounter = 0;
	var divAbout;
	var firstNumber = false;
	var floatNumber = false;
	var level = 0;
	var oldLevel = 0;
	var column = 0;
	var secondNumber = 0;
	//If the operation is selected it also means that the first number is already introduced
	var selectedOperation = "none";

	//a -> 97  -> green
	//w -> 119 -> blue
	//d -> 100 -> red
	//s -> 115 -> yellow
	//z -> 120 -> black
	//x -> 122 -> white

	function about() {
		divAbout = document.createElement("div");
		divAbout.id = "about";
		divAbout.innerHTML = "<b>CALCULADORA USABLE 0.1a</b><br><br>Desarrollada por:<br><br><b>Jos&eacute Carlos Garrido P&eacuterez</b> (i62gapej@uco.es)<br><b>Rub&eacuten Salado Cid</b> (i62sacir@uco.es)<br><br>Interacci&oacuten Persona-Ordenador<br>Ingenier&iacutea en Inform&aacutetica<br>Escuela Polit&eacutecnica Superior<br>Universidad de C&oacuterdoba<br>Curso 2012/2013";
		document.body.appendChild(divAbout);
	}

	function addChar(addedChar){
		if (firstNumber != result) {
			document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+addedChar;
		} else {
			document.getElementById("result").innerHTML = addedChar;
		}
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
				colorPressed = "white";
				break;
			case 120:
				colorPressed = "black";
				break;				
		}

		if(colorPressed != ""){
			nextMove(colorPressed);
		}
	}

	function nextMove(colorPressed){
		if(level == 0 || (level == 1 && column == 0)){
			if(colorPressed == "green"){
				selectColumn(1);
			}else if(colorPressed == "blue"){
				selectColumn(2);
			}else if(colorPressed == "red"){
				selectColumn(3);
			}else if(level == 1 && colorPressed == "yellow"){
				if(selectedOperation == "none"){
					level=2;
					setColours();
					//It is time to select operations!
				}else{
					level=3;
					setColours();
				}
			} else if(colorPressed == "black") {
				aboutCounter += 1;

				if (aboutCounter == 5) {
					about();
				} else if (aboutCounter == 6) {
					document.body.removeChild(divAbout);
					aboutCounter = 0;
				}
			}
		}else if(level == 1 && column != 0){
			if (colorPressed != "white") {
				selectNumber(colorPressed);
			} else {
				level = oldLevel;
				column = 0;
				setColours();
			}
		}else if(level == 2){
			if(colorPressed != "black") {
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
				oldLevel = level;
				level = 0;
				setColours();
			}
		}else if(level == 3){
			if(colorPressed == "white"){
				document.getElementById("result").innerHTML = "";
				level = 0;
				column = 0;
				setColours();
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

		oldLevel = level;
		level = 1;
		column = 0;
		selectedOperation = "none";
		firstNumber = result;
		setColours();
		document.getElementById("result").innerHTML = result;
	}

	function selectNumber(colorPressed){
		if(column == 1){
			switch(colorPressed){
				case "blue":
					addChar("7");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "green":
					addChar("4");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "red":
					addChar("1");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "yellow":
					addChar("0");
					oldLevel = level;	
					level = 1;
					column = 0;
					setColours();
					break;
			}
		}else if(column == 2){
			switch(colorPressed){
				case "blue":
					addChar("8");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "green":
					addChar("5");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "red":
					addChar("2");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "yellow":
				if (floatNumber == false){
					if(document.getElementById("result").innerHTML == ""){
						addChar("0.");	
					}else{
						addChar(".");
					}
					oldLevel = level;
					level = 0;
					column = 0;
					floatNumber = true;
					setColours();
					break;
				}
			}
		}else if(column == 3){
			switch(colorPressed){
				case "blue":
					addChar("9");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "green":
					addChar("6");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "red":
					addChar("3");
					oldLevel = level;
					level = 1;
					column = 0;
					setColours();
					break;
				case "yellow":
					if(document.getElementById("result").innerHTML != "") { 
						document.getElementById("result").innerHTML = parseFloat(document.getElementById("result").innerHTML)*-1;
						oldLevel = level;		
						level = 1;
						column = 0;
						setColours();
					}
					break;
			}
		}
	}

	function selectColumn(number){
		for (var i = 0; i < document.querySelectorAll(".button").length; i++){
			document.querySelectorAll(".button")[i].className = "button dark";	
		}
		switch(number){
			case 1:
				document.querySelector("#button7").className = "button blue";
				document.querySelector("#button4").className = "button green";
				document.querySelector("#button1").className = "button red";
				document.querySelector("#button0").className = "button yellow";
				oldLevel = level;
				level = 1;
				column = 1;
				break;
			case 2:
				document.querySelector("#button8").className = "button blue";
				document.querySelector("#button5").className = "button green";
				document.querySelector("#button2").className = "button red";
				document.querySelector("#buttonDot").className = "button yellow";
				oldLevel = level;
				level = 1;
				column = 2;
				break;
			case 3:
				document.querySelector("#button9").className = "button blue";
				document.querySelector("#button6").className = "button green";
				document.querySelector("#button3").className = "button red";

				if (document.querySelector("#result").innerHTML == "") {
					document.querySelector("#buttonNeg").className = "button dark";
				} else {
					document.querySelector("#buttonNeg").className = "button yellow";
				}
				oldLevel = level;
				level = 1;
				column = 3;
				break;
		}
	}

	function setColours(){
		switch(level){
			case 0: //Beggining the introduction of a number
		  		//First column
				document.querySelector("#button7").className = "button green";
				document.querySelector("#button4").className = "button green";
				document.querySelector("#button1").className = "button green";
				document.querySelector("#button0").className = "button green";
				//Second column
				document.querySelector("#button8").className = "button blue";
				document.querySelector("#button5").className = "button blue";
				document.querySelector("#button2").className = "button blue";
				document.querySelector("#buttonDot").className = "button blue";
				//Third column
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
		  		//First column
				document.querySelector("#button7").className = "button green";
				document.querySelector("#button4").className = "button green";
				document.querySelector("#button1").className = "button green";
				document.querySelector("#button0").className = "button green";
				//Second column
				document.querySelector("#button8").className = "button blue";
				document.querySelector("#button5").className = "button blue";
				document.querySelector("#button2").className = "button blue";
				document.querySelector("#buttonDot").className = "button blue";
				//Third column
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
				if(selectedOperation != "none") {
					document.querySelector("#buttonEqual").className = "button black";
				} else {
					document.querySelector("#buttonEqual").className = "button dark";					
				}
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