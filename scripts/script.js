const card = document.getElementsByClassName("container");

card[0].addEventListener('click', flip);

function flip(event){
	let element = event.currentTarget;
	if (element.className === "container") {
        
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
   
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};



