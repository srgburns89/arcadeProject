const canvas = $("#snake-canvas")[0];
const ctx = canvas.getContext("2d");
const w = $("#snake-canvas").width();
const h = $("#snake-canvas").height();
const cw = 15;
let food;
let snake;
let d = "RIGHT";

let gameloop = setInterval(update, 100);

function update() {
 if (d == "RIGHT")
  snake.x = snake.x + 1;
 else if (d == "LEFT")
  snake.x = snake.x - 1;
 else if (d == "UP") 
  snake.y = snake.y - 1;
 else if (d == "DOWN")
  snake.y = snake.y + 1;

 check_borders();
 check_food();
 color();
 paint_cell(food.x, food.y, "red");
 paint_cell(snake.x, snake.y, "green");
}

function showGameOver() {

 var current = $('#current').text();
 $('#final').text(current);
 $('#restart').fadeIn();
}

function snakeGrow() {

}


function placeFood() {
 food = {
  x : Math.round(Math.random()*(w-cw)/cw),
  y : Math.round(Math.random()*(h-cw)/cw)
 }
}

function placeSnake() {
 snake = {
  x : Math.round(Math.random()*(w-cw)/cw),
  y : Math.round(Math.random()*(h-cw)/cw)   
 }
}

function color(){
 ctx.fillStyle = "yellow";
 ctx.fillRect(0, 0, w, h);
 ctx.strokeStyle = "white";
 ctx.strokeRect(0, 0, w, h);

}

function check_borders() {
 if (snake.x < 0 || snake.x > (w-cw)/cw || snake.y < 0 || snake.y > (h-cw)/cw) {
  clearInterval(gameloop);
  showGameOver();
 }
}

function paint_cell(x,y, color){
 ctx.fillStyle=color;
 ctx.fillRect(x*cw,y*cw,cw,cw);
 ctx.strokeStyle="white";
 ctx.strokeRect(x*cw,y*cw,cw,cw);
}

function check_food() {
 if (food.x == snake.x && food.y == snake.y) {
  let current = parseInt($('#current').text());
  current += 1;
  $('#current').text(current);
  placeFood();
 }
 

}

placeFood();
paint_cell(food.x, food.y, "grey");
placeSnake();
paint_cell(snake.x, snake.y, "green");


$(document).keydown(function(e){

 var key = e.which;
 if(key == "37") {
  snake.x -= 1;
  d = "LEFT";
 }
 else if(key == "38") {
  snake.y -= 1;
  d = "UP";
 }
 else if(key == "39") {
  snake.x += 1;
  d = "RIGHT";
 }
 else if(key == "40") {
  snake.y += 1;
  d = "DOWN";
 }

 check_food();
 blank();
 color = "grey";
 paint_cell(food.x, food.y);
 color = "green";
 paint_cell(snake.x, snake.y);

});