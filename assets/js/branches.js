class Branch{
    constructor(begin, end){
        this.begin = begin;
        this.end = end;
        this.len = begin.y - end.y;
        this.branched = false;
        this.grown = false;
    }

    update(){
        if(this.len >= 0){
            this.len -= 1;
        }else{
            this.grown = true;
        }
    }

    show(){
        let x1 = this.begin.x;
        let y1 = this.begin.y;
        let x2 = this.end.x;
        let y2 = this.end.y;
        if(this.len > 0){
            y2 = this.end.y + this.len;
        }
        stroke(255);
        strokeWeight(2);
        line(x1, y1, x2, y2);
    }

    branch(mult){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(mult * PI / 6);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        return new Branch(this.end, newEnd);
    }
}