class Leaf{
    constructor(pos){
        this.pos = pos;
        this.lifespan = 255;
    }

    update(){
        this.lifespan -= 5;
    }

    show(){
        noStroke();
        fill(22, 58, this.lifespan);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }

    fall(){
        this.pos.y += random(0, 4);
    }
}