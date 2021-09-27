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
var cor, wro;

function preload() {
     appleImg = loadImage("apple.jpeg");
     bananaImg = loadImage("banana2.png");
}

function setup() {
     createCanvas(600, 600);

     value1 = round(random(1, 18));
     value2 = round(random(1, value1));
     Ans = value1 - value2;

     stuff = [-4,-3,-2,-1,1,2,3,4];

     va = round(random(stuff));
     va1 = round(random(1, 3));
     va2 = round(random(stuff));
     va3 = round(random(1, 6));

     gameState = 0;

     input = createButton(Ans);
     input.size(100, 60);
     input.style("font-size: 30px; font-family: Optima; border-radius: 40px;");
     input.style("border: outset 8px;");
     input.mousePressed(wellAns);

     input1 = createButton(Ans+va);
     input1.size(100, 60);
     input1.style("font-size: 30px; font-family: Optima; border-radius: 40px;");
     input1.style("border: outset 8px;");
     input1.mousePressed(badAns);

     input2 = createButton(Ans+va1);
     input2.size(100, 60);
     input2.style("font-size: 30px; font-family: Optima; border-radius: 40px;");
     input2.style("border: outset 8px;");
     input2.mousePressed(badAns);

     if(va1 === 1) {
          input.position(125, 350);
          input1.position(325, 350);
          input2.position(525, 350);
     } else if(va1 === 2) {
          input.position(325, 350);
          input1.position(525, 350);
          input2.position(125, 350);
     } else if(va1 === 3) {
          input.position(525, 350);
          input1.position(125, 350);
          input2.position(325, 350);
     }

}

function draw() {
     background(255); 

     x = 80;
     y = 380;
     for(var i=0; i < value1; i++) {
          cube = createSprite(x, y, displayWidth/9, displayHeight/9);
          cube.addImage(appleImg);
          appleImg.resize(displayWidth/25, displayHeight/20);
          x += 70;
          if(x === 80 + 350) {
               y += 60;
               x = 80;
          }
     }

     x = 80;
     y = 380;
     for(var i=0; i < value2; i++) {
          cube2 = createSprite(x, y, displayHeight/15, 5);
          x += 70;
          if(x === 80 + 350) {
               y += 60;
               x = 80;
          }
     }
          

     textSize(50);
     textFont('Courier');
     textAlign(CENTER, CENTER);
     fill('grey')
     text(value1 + " - " + value2, 300, 150);
     
     textAlign(CENTER, CENTER)
     textSize(30);
     text("Question:", 100, 70);

     

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
          textSize(28);
          textFont('Cochin');
          textAlign(CENTER, CENTER);
          fill('green');
          text("Well Done! You have gotten this question correct!", 300, 250); 
     } else if(timer > 0 && gameState === 2) {
          textSize(31);
          textFont('Cochin');
          textAlign(CENTER, CENTER);
          fill('red');
          text("Sorry, that was incorrect. The answer was " + Ans + ".", 300, 250);
     }




    
    drawSprites();
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
     next.position(460, 540);
     next.size(200, 80);
     next.style("font-size: 20px; font-family: Optima; border-radius: 50px;");
     next.style("border: outset 8px; background-color: aqua;")
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
     next.position(460, 540);
     next.size(200, 80);
     next.style("font-size: 25px; font-family: Optima; border-radius: 50px;");
     next.style("border: outset 8px; background-color: aqua;");
     next.mousePressed(refresh);

     input.hide();
     input1.hide();
     input2.hide();
}