//First Web App Project (Dynamic not only static)
var numsquares = 6;
var colors = []
var picked ;
var squares = document.querySelectorAll(".square");
var display = document.getElementById("colorpick");
var msgdisplay = document.querySelector("#message");
var head = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
init();

function init(){
    //Easy and hard buttons
    easyhard();
    //Setting Squares 
    setsquares();
    //For resetting everything 
    reset();

}

function easyhard(){
    for(var i =0;i<mode.length;i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numsquares = 3 : numsquares = 6;
            reset();
        });
    }
}

function setsquares(){
    for(var i =0;i<squares.length;i++)
    {
        //add event listener 
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === picked){
                  msgdisplay.textContent ="Correct";
                  resetbutton.textContent = "Play Again"
                  changeColor(this.style.backgroundColor);
                    head.style.backgroundColor = this.style.backgroundColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                msgdisplay.textContent = "Try Again";
            }
        });
    }
}
function reset(){
    colors = generateRandomColors(numsquares);
    //pick a new random colour from array
    picked = pickColor();
    //Display The new Rgb Content 
    display.textContent = picked;
    //Display the playing message for new colors 
    resetbutton.textContent="New Colours";
     //Disappearing the status message 
    msgdisplay.textContent="";
    //change colors of squares 
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];}
    else{
        squares[i].style.display = "none";
    }
    }
    head.style.backgroundColor="steelblue";
}

/*easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    colors = generateRandomColors(3);
    picked=pickColor();
    display.textContent = picked;
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
    squares[i].style.display = "none";
        }
    }
})

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    colors = generateRandomColors(6);
    picked=pickColor();
    display.textContent = picked;
    for(var i =0;i<squares.length;i++){
            squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    }
});
*/

resetbutton.addEventListener("click",function(){
    reset();
});

function changeColor(color){
    //loop through the square 
    for(var i =0 ;i<squares.length;i++){
    //Change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   var ran =  Math.floor(Math.random() * colors.length);
    return colors[ran];
}

function generateRandomColors(num){
    //Make an array 
    var arr = []
    //Add colors
    for(var i =0;i< num;i++){
        // get random colour and push into arr
        arr[i] = randomColor();
    } 
    //return array
    return arr;
}

function randomColor(){
    // pick a red from 0, 255 
    var r = Math.floor(Math.random()*256);
    // pick a green from 0 to 255 
    var g = Math.floor(Math.random()*256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g + ", " + b + ")" ;

}