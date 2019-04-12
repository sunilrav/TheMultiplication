/// <reference path="phaser.d.ts"/>
var gameWidth = 384;
var gameHeight = 224;
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
    var game = new Game(this);
    game.create();
}
var Game = /** @class */ (function () {
    function Game(game) {
        this.game = game;
    }
    Game.prototype.create = function () {
        this.createBackground();
    };
    Game.prototype.createBackground = function () {
        this.game.add.image(gameWidth / 2, gameHeight / 2, 'bg-1');
    };
    return Game;
}());
//# sourceMappingURL=app.js.map