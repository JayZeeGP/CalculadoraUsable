(function (){
	var level = 1;
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
				document.querySelector("#buttonDel").className = "buttonwhite";
				document.querySelector("#buttonEqual").className = "button black";
  				break;  				
		}
	};

	setColours();
})();