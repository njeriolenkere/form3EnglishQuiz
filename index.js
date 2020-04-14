
//<!-- <p> Answers and questions provided and revised by Teacher Lucy</p> -->
//Stackflow for life ... w3schools.com great tutorials
var answer = new Array(10);

answer [0]= "question 1. is b) Him"
answer [1]= "question 2. is a) I"
answer [2]= "question 3. is a) Us"
answer [3]= "question 4. is b) Her"
answer [4]= "question 5. is b) Them"
answer [5]= "question 6. is b) Me"
answer [6]= "question 7. is a) Him"
answer [7]= "question 8. is b) Them"
answer [8]= "question 9. is a) Us"
answer [9]= "question 10. is b) Them"

function quiz(form) {
   var numQuestion=10;
   var numChoices= 2;
   var currQuest;
   var currSel;
  
	for (k=0; k<numQuestion; k++) {
	currQuest = k*numChoices;
	answered = false;

    for (i=0; i<numChoices; i++) {
		
    currSel= form.elements[i+ currQuest];

    //if checked

	if (currSel.checked) {

         answered = true;

         //if the currect selected value is the right answer
		if (currSel.value == answer[k]) {
			
           //alert + the answer
			alert("Correct!! the answer to " + answer[k]);

			break;
			
		}
        //otherwise alert 
		else { alert("Wrong, the answer to " + answer[k]);}			
}
}
//if unchecked
if (answered===false){

	alert("Kindly answer all the questions."); 

    return false;} 
}
}
 

 

