var numsquares=6;
var colors=generateRandomColors(6);
var squares =document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");;
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="new colors";
	messageDisplay.textContent="";
	numsquares=3;
	colors=generateRandomColors(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(i<3)
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else 
		{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="new colors";
	messageDisplay.textContent="";
	numsquares=6;
	colors=generateRandomColors(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

resetButton.addEventListener("click",function(){
	//generate all new color
		colors=generateRandomColors(numsquares);

	//pick a new random color from array
		pickedColor=pickColor();
	
	//change colorDisplay to match picked color
		colorDisplay.textContent=pickedColor;

	//change color of square
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
		}
	//changing h1 background color
		h1.style.backgroundColor="steelblue";

	//changing message display
		messageDisplay.textContent="";

	//changing the text on the click
		this.textContent="new colors"
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	//Add initial colors to square
	squares[i].style.backgroundColor=colors[i];

	//add click listener to square
	squares[i].addEventListener("click",function(){
		//grab color of clikced square
		var clickedColor=this.style.backgroundColor;
		
		//compare color to pickedcolor
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
		else 
		{
			this.style.backgroundColor="#232323"
			messageDisplay.textContent="Try Again"
		}
	});
}

function changeColor(color){
	//loop through all square
	for(var i=0;i<squares.length;i++)
	{
		//change each color to match give color
			squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}
function generateRandomColors(num)
{
	//make an arrray
	var arr=[];
	
	//add num random colors to array
	for(var i=0;i<num;i++)
	{	
		//get random color and push into arr
		arr.push(randomColor());
	}

	// return that array
	return arr;
}
function randomColor(){
	//generating random color
	
	//picking a red from 0 - 255
	var r=Math.floor(Math.random()*256);

	//picking a green from 0 -255
	var g=Math.floor(Math.random()*256);

	//picking a blue from 0 - 255
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";

}