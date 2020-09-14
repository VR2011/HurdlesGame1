class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.title = createElement("h2");
        //this.reset = createButton("Reset");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Hurdles Race Game (Skeleton)");
        this.title.position(5, 100);
        this.title.style('font-size', '60px');
    
        this.input.position(820, 300);
        this.button.position(820, 320);
        //this.reset.position(820, 340);

        /*this.button.mousePressed(()=>{
            if(this.input.value() === "Name"){
                error1 = text("Please Give A name.", 100, 100);
            } else {
                document.getElementById("element").error1.display = "none";
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                this.greeting.html("Hello " + player.name)
                this.greeting.position(400, 300);
            }
        });*/

        this.button.mousePressed(()=>{
            textSize(30);
            fill('red');
            if(this.input.value() === ""){
                error1 = text("Please Enter a Name", 250, 300);
            } else {
                gameState = 1;
                game_play = true;
            }
        });
    }
}