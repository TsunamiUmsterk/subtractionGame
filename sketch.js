var value1;
var value2;
var va, va1, va2, va3;
var verifyAns, Ans;
var input, input1, input2;
var cube;
var gameState;
var timer;
var points;
var stuff = [];
var x, y, m, n;
var appleImg, bananaImg;
var cube2;

function preload() {
     appleImg = loadImage("apple2.png");
     bananaImg = loadImage("banana2.png");
}

function setup() {
     createCanvas(displayWidth-10, displayHeight/3*2);

     value1 = round(random(1, 12));
     value2 = round(random(1, value1));
     Ans = value1 - value2;

     stuff = [-4,-3,-2,-1,1,2,3,4];

     va = round(random(stuff));
     va1 = round(random(1, 3));
     va2 = round(random(stuff));
     va3 = round(random(1, 6));

     gameState = 0;

     input = createButton(Ans);
     input.size(displayWidth/3-2.5, displayHeight/12);
     input.style("font-size: 30px; font-family: Marker Felt;");
     input.mousePressed(wellAns);

     input1 = createButton(Ans+va);
     input1.size(displayWidth/3-2.5, displayHeight/12);
     input1.style("font-size: 30px; font-family: Marker Felt;");
     input1.mousePressed(badAns);

     input2 = createButton(Ans+va1);
     input2.size(displayWidth/3-2.5, displayHeight/12);
     input2.style("font-size: 30px; font-family: Marker Felt;");
     input2.mousePressed(badAns);

     if(va1 === 1) {
          input.position(5, displayHeight/5);
          input1.position(displayWidth/3+2.5, displayHeight/5);
          input2.position(displayWidth/3*2, displayHeight/5);
     } else if(va1 === 2) {
          input.position(displayWidth/3+2.5, displayHeight/5);
          input1.position(displayWidth/3*2, displayHeight/5);
          input2.position(5, displayHeight/5);
     } else if(va1 === 3) {
          input.position(displayWidth/3*2, displayHeight/5);
          input1.position(5, displayHeight/5);
          input2.position(displayWidth/3+2.5, displayHeight/5);
     }

}

function refresh() {
     location.reload();
}

function badAns() {
     timer = 25;
     if(frameCount%60 === 0) {
          timer += -1;
     }

     gameState = 2;

     next = createButton("Next Question");
     next.position(displayWidth/12*5, displayHeight/6*3);
     next.size(displayWidth/6, displayHeight/15);
     next.style("font-size: 20px; font-family: Marker Felt;");
     next.mousePressed(refresh);

     input.hide();
     input1.hide();
     input2.hide();
   }

function wellAns() {
     timer = 25;
     if(frameCount%60 === 0) {
          timer += -1;
     }

     gameState = 1;

     next = createButton("Next Question");
     next.position(displayWidth/12*5, displayHeight/6*3);
     next.size(displayWidth/6, displayHeight/15);
     next.style("font-size: 25px; font-family: Marker Felt;");
     next.mousePressed(refresh);

     input.hide();
     input1.hide();
     input2.hide();
}

function draw() {
     background(250); 

     x = displayWidth/12*5;
     y = displayHeight/6*2;
     for(var i=0; i < value1; i++) {
          cube = createSprite(x, y, displayWidth/9, displayHeight/9);
          cube.addImage(appleImg);
          appleImg.resize(displayWidth/25, displayHeight/20);
          x += 70;
          if(x === displayWidth/12*5 + 210) {
               y += 60;
               x = displayWidth/12*5;
          }
     }

     x = displayWidth/12*5;
     y = displayHeight/6*2;
     for(var i=0; i < value2; i++) {
          cube2 = createSprite(x, y, displayHeight/15, 5);
          x += 70;
          if(x === displayWidth/12*5 + 210) {
               y += 60;
               x = displayWidth/12*5;
          }
     }
          

     textSize(50);
     textFont('Marker Felt');
     textAlign(CENTER, CENTER);
     fill('grey')
     text(value1 + " - " + value2, displayWidth/2, displayHeight/12);
     
     fill('grey');
     textAlign(CENTER, CENTER)
     textSize(30);
     text("Question:", displayWidth/6, displayHeight/12);

     

     if(va3 === 1) {
          input.style("background-color: red;");
          input1.style("background-color: orange;");
          input2.style("background-color: yellow;");
     } else if(va3 === 2) {
          input.style("background-color: orange;");
          input1.style("background-color: yellow;");
          input2.style("background-color: green; color: white");
     } else if(va3 === 3) {
          input.style("background-color: yellow;");
          input1.style("background-color: green; color: white");
          input2.style("background-color: blue; color: white");
     } else if(va3 === 4) {
          input.style("background-color: green; color: white");
          input1.style("background-color: blue; color: white");
          input2.style("background-color: violet;");
     } else if(va3 === 5) {
          input.style("background-color: blue; color: white");
          input1.style("background-color: violet;");
          input2.style("background-color: red;");
     } else if(va3 === 6) {
          input.style("background-color: violet;");
          input1.style("background-color: red;");
          input2.style("background-color: orange;");
     }

     if(timer > 0 && gameState === 1) {
          textSize(45);
          textFont('Marker Felt');
          textAlign(CENTER, CENTER);
          fill('green');
          text("Well Done! You have gotten this question correct!", displayWidth/2, displayHeight/4); 
     } else if(timer > 0 && gameState === 2) {
          textSize(40);
          textFont('Marker Felt');
          textAlign(CENTER, CENTER);
          fill('red');
          text("Sorry, that was incorrect. The answer was " + Ans + ".", displayWidth/2, displayHeight/4);
     }




    
    drawSprites();
}

