class Player {
    constructor(x, y, width, height) {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("Runner3.png");
    }

    display(){
        push();
        translate(this.x, this.y);
        //rectMode(CENTER);
        //rect(this.x, this.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height*2);
        pop();
        fill("white");
        textSize(15);
        text(form.input.value(), this.x - 10, this.y - 50);
        //this.debug = true;
    }
    hide(){
        this.hide;
    }
}
