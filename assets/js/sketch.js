let tree = [];
let leaves = [];
let count = 0;
let strokeWeightVariable = 7;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(51)
    let begin = createVector(width / 2, height);
    let end = createVector(width / 2, height - 150);
    tree.push(new Branch(begin, end))
}

function mouseClicked() {
    growTree();
}

function growTree() {
    if (strokeWeightVariable >= 1) {
        for (let i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].branched) {
                tree.push(tree[i].branch(1));
                tree.push(tree[i].branch(-1));
                strokeWeightVariable -= 1;
            }
            tree[i].branched = true;
        }
        count++;
    }
}

function draw() {
    background(13);
    let grow = true;
    tree.forEach(branch => {
        branch.update();
        branch.show();
        if (branch.grown && !branch.branched && !branch.leaf) {
            leaves.push(new Leaf(branch.end.copy()));
            branch.leaf = true;
        }else if (!branch.grown){
            grow = false;
        }
    });
    if(grow && leaves.length <= 0){
        growTree();
    }

    leaves.forEach(leaf => {
        leaf.update();
        leaf.show();
        if (leaf.lifespan < 40) {
            leaf.fall();
        }
    });
    for (let i = leaves.length - 1; i >= 0; i--) {
        if (leaves[i].pos.y > height) {
            leaves.splice(i, 1);
        }
    }
/*    if(leaves.length <= 0){
        growTree();
    }*/
}