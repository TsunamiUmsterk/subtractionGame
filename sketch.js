var value1;
var value2;
var va, va1;
var input;
var verifyAns, Ans;
var input, input1, input2;
var cube;
var gameState;
var timer;
var points;

function setup() {
     createCanvas(displayWidth-10, displayHeight/2);

     value1 = round(random(1, 20));
     value2 = round(random(1, value1));
     Ans = value1 - value2

     va = round(random(1, 3));
     va1 = round(random(1, 3));

     gameState = 0;

     input = createButton(Ans);
     input.size(displayWidth/3-2.5, displayHeight/12);
     input.style("font-size: 30px; font-family: Geneva;");
     input.mousePressed(wellAns);

     input1 = createButton(Ans-va);
     input1.size(displayWidth/3-2.5, displayHeight/12);
     input1.style("font-size: 30px; font-family: Geneva;");
     input1.mousePressed(badAns);

     input2 = createButton(Ans+va);
     input2.size(displayWidth/3-2.5, displayHeight/12);
     input2.style("font-size: 30px; font-family: Geneva;");
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
     next.position(displayWidth/12, displayHeight/3);
     next.size(displayWidth/6, displayHeight/15);
     next.style("font-size: 20px; font-family: Geneva;");
     next.mousePressed(refresh);
   }

function wellAns() {
     timer = 25;
     if(frameCount%60 === 0) {
          timer += -1;
     }

     gameState = 1;

     next = createButton("Next Question");
     next.position(displayWidth/12, displayHeight/3);
     next.size(displayWidth/6, displayHeight/15);
     next.style("font-size: 25px; font-family: Geneva;");
     next.mousePressed(refresh);
}

function draw() {
     background(250);

     textSize(50);
     textFont('Geneva');
     textAlign(CENTER, CENTER);
     fill('grey')
     text(value1 + " - " + value2, displayWidth/2, displayHeight/12);
     
     fill('grey');
     textAlign(CENTER, CENTER)
     textSize(30);
     text("Question:", displayWidth/6, displayHeight/12);

     if(timer > 0 && gameState === 1) {
          textSize(20);
          textFont('Geneva');
          textAlign(CENTER, CENTER);
          fill('green');
          text("Well Done! You have gotten this question correct!", displayWidth/2, displayHeight/12*5);
     } else if(timer > 0 && gameState === 2) {
          textSize(20);
          textFont('Geneva');
          textAlign(CENTER, CENTER);
          fill('red');
          text("Sorry, that is incorrect. Please retry", displayWidth/2, displayHeight/12*5);
     }




    
    drawSprites();
}

