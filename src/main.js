let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyL, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyW;

/*
Miles Katlin
Rocket Patrol Mods
6/2/22
The programming of the project I did a long time ago when this assignment
was first assigned. It took me maybe a total of 10 hours over a few days

The artwork took me maybe another hour and a half (the explosion was really
confusing for me for some reason).

I couldn't get around to finishing it until now sorry. A lot of things came up
and I was working really hard in this class to make our games look great.

I did:
    timer                                                              10 pts
    new spaceship thats faster and worth more                          20 pts
    new artwork for all in-game assets (rocket, spaceships, explosion) 20 pts
    simultaneous two-player mode                                       30 pts
    TOTAL:                                                            (80 pts)


I would have done more but I am swamped trying to finish the final game.
*/