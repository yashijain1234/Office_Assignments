
    	// generate a random number
	function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//calling functions
	var counter=0;
          function demo() { 
          	var number= document.getElementById("num1").value;
          	if(number == '') {
      		alert("Number field cannot be empty");
      	}
      	else { 
           var random=generateRandomIntegerInRange(1,100);
           var win=0;
		if(number == random) {
       	win=1;
       	alert("Hurrah!!, you won the lottery");
       }
       else if(counter === 9) {
       	alert("You win");
       	//return;
       }
       else if(counter >= 10) {
       	alert("Chances are over");
       	return;
       }
       else {
       	alert("Oops, Better luck for the next time");
       }
       counter=counter+1;
      console.log(counter);
       }
   }