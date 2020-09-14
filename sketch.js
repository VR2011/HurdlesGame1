var form, player, game, hurdle;
var track;
var gameState = 0;
var player_visible = false;
var error1;
var game_play = false;
var hurdles = [];
var score = 0;

function preload() {
    track = loadImage("images/Track.png");
    p2 = loadImage("images/Runner2.png");
}

function setup(){
    createCanvas(800, 600);
    form = new Form();
    player = new Player(40, 75, 50, 70);
    player2 = new Player(40, 225, 50, 70);
    player3 = new Player(40, 375, 50, 70);
    player4 = new Player(40, 525, 50, 70);
    game = new Game();
    hurdle1 = new Hurdle(500, 105, 50, 70);
    hurdle2 = new Hurdle(1000, 105, 50, 70);
    hurdle3 = new Hurdle(1500, 105, 50, 70);
    hurdle4 = new Hurdle(2000, 105, 50, 70);
    hurdle5 = new Hurdle(2500, 105, 50, 70);
    hurdle6 = new Hurdle(3000, 105, 50, 70);
    hurdle7 = new Hurdle(3500, 105, 50, 70);
    hurdles = [hurdle1, hurdle2, hurdle3, hurdle4, hurdle5, hurdle6, hurdle7];
}

function draw(){
    clear();
    form.display();
    if(game_play === true){
        game.play();
    }
    if(gameState === 1){
        if(player_visible === true){
            player.display();
            player2.display();
            player3.display();
            player4.display();

        }
        hurdle1.display();
        hurdle2.display();
        hurdle3.display();
        hurdle4.display();
        hurdle5.display();
        hurdle6.display();
        hurdle7.display();

        textSize(10);
        text("Score:" + score, player.x - 20, player.y - -15);
    }
    if(isTouching(player, hurdle1)){
        gameState = 2;
    }
    if(isTouching(player, hurdle2)){
        gameState = 2;
    }
    if(isTouching(player, hurdle3)){
        gameState = 2;
    }
    if(isTouching(player, hurdle4)){
        gameState = 2;
    }
    if(isTouching(player, hurdle5)){
        gameState = 2;
    }
    if(isTouching(player, hurdle6)){
        gameState = 2;
    }
    if(isTouching(player, hurdle7)){
        gameState = 2;
    }
    if(gameState === 2){
        background('#A1E887');
        textSize(20);
        fill("blue");
        text("Game Over. Refresh to continue.", 400, 300);
        if(keyCode === 39){
            player.x = 0;
        }
    }
    if(player.x >= 3880){
        score = 1;
    }
    
    drawSprites();
}