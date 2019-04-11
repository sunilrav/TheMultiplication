/// <reference path="phaser.d.ts"/>

var gameWidth = 800;
var gameHeight = 600;

var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image("bg-1", 'assets/environment/bg-1.png');
    this.load.image("bg-2", 'assets/environment/bg-2.png');
    
}

function create() {
    this.add.image(400, 300, 'bg-1');
}

