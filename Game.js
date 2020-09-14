class Game {
    constructor(){
    }
    play() {
        form.hide();
        player_visible = true;
        image(track, 0, 0, 4000, 600);
        if(player.x < 3880){
            camera.position.x = player.x + 360;
            camera.position.y = displayHeight/5 + 12;
            if(player.y < 75){
                player.y += 5;
            }
            if(keyIsDown(39)){
                player.x += 10;
            }
            if(keyIsDown(38)){
                if(player.y > 0){
                player.y -= 20;
                }
            }
        }
    }
}