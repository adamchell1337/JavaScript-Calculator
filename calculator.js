
//IIFE to run instantly
(function(){
  
	let display = document.querySelector('.calc-display');
	let buttons = document.querySelectorAll('.btn');
	let clearDisplay = document.querySelector('.btn-clear');
	let equal = document.querySelector('.btn-equal');
  
	//GET values from numbers that are pressed
	buttons.forEach(function(button){
		button.addEventListener('click', function(e){
			let value = e.target.dataset.num;
			display.value += value;
		})
	});
  
	clearDisplay.addEventListener('click', function(e){
		display.value = '';
	})
  
	equal.addEventListener('click', function(e){
		if(display.value === ''){
			display.value = 'Please Enter a Value';
		} else {
			let answer = eval(display.value);
			display.value = answer;
		}
	})
  
	
 
})(); //End of IIFE