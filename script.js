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
		if(e.key==="Backspace"){
			if(!input.value&&index>0){
			inputs[index - 1].focus();
            inputs[index - 1].value = "";
			}
			else{
            input.value = "";
			}
		}
		if (e.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
	})
});
window.onload = () => {
  inputs[0].focus();
};


