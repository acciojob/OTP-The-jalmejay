//your JS code here. If required.

let inputs=document.querySelectorAll(".code");

inputs.forEach((input,index)=>{
	input.addEventListener("input",(e)=>{
		let value=e.target.value;
		if(value&&index<inputs.length-1){
			inputs[index + 1].focus();
		}
	});
	input.addEventListener("keydown",(e)=>{
		if(e.key=="Backspace"){
			if(!input.value&&index>0){
			inputs[index - 1].focus();
            inputs[index - 1].value = "";
			}
			else{
            inputs[index - 1].value = "";
			}
		}
		if(e.key==="ArrowLeft"){
			if(!input.value&&index>0){
				inputs[index - 1].focus();
			}
		}
		if(e.key==="ArrowRight"){
			if(!input.value&&index<6){
				inputs[index +1].focus();
			}
		}
	})
});
// inputs[0].focus();


