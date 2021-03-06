var numsquares=6;
var colors=[];
var pickedColor;
var squares =document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");;
var modeBtn=document.querySelectorAll(".mode");
init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0;i<modeBtn.length;i++){
		modeBtn[i].addEventListener("click",function(){
		for(var j=0;j<modeBtn.length;j++)
			modeBtn[j].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numsquares=3;
		}
		else if(this.textContent==="Medium"){
			numsquares=6;
		}
		else
			numsquares=9;
		reset();
		});
	}
}

function setupSquares(){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent="Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again?"
			}
			else{
				this.style.backgroundColor="#232323"
				messageDisplay.textContent="Try Again"
			}
		});
	}
}

function reset(){
	colors=generateRandomColors(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="new colors";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}

resetButton.addEventListener("click",function(){
	reset();
});

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){	
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	
	return "rgb("+r+", "+g+", "+b+")";
}