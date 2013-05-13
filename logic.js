(function (){
	var level = 0;
	var firstNumber = 0;
	var secondNumber = 0;
	var operator = "";

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
				document.querySelector("#buttonPlus").className = "button yellow";
				document.querySelector("#buttonDivide").className = "button yellow";
				document.querySelector("#buttonMult").className = "button yellow";				
				document.querySelector("#buttonMinus").className = "button yellow";
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
		}
	};

	//a -> 97  -> green
	//w -> 119 -> blue
	//d -> 100 -> red
	//s -> 115 -> yellow
	//z -> 122 -> black
	//x -> 120 -> white
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
		if(level == 0){
			if(colorPressed == "green"){
			selectRow(1);
			}
		}
	}

	function selectRow(number){
		document.querySelectorAll(".button").className = "button dark";
	}

	setColours();
	addEventListener("keypress", handleButtonPress,false);
})();