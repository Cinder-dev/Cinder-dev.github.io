'use strict';
const WIDTH = 480;
const HEIGHT = 320;

const SPACING = 1;
const BLOCK_SIZE = 16;

function init() {
    document.onclick = () => window.location.reload();
    let app = new PIXI.Application({width: WIDTH, height: HEIGHT });
    let graphics = new PIXI.Graphics();
    let offset = 0;

    for(let x = 0; x < WIDTH * 2; x += BLOCK_SIZE + SPACING) {
        for(let y = 0; y < HEIGHT * 2; y += BLOCK_SIZE + SPACING) {
            graphics.beginFill(getRandomArbitrary(0x000000, 0xFFFFFF));
            graphics.drawRect(x, y, BLOCK_SIZE - SPACING, BLOCK_SIZE - SPACING);
            graphics.endFill();
        }
    }

    app.stage.addChild(graphics);
    graphics.x = app.screen.width / 2;
    graphics.y = app.screen.height / 2;
    graphics.pivot.x = graphics.width / 2;
    graphics.pivot.y = graphics.height / 2;
    app.ticker.add((delta) =>{
        offset = (offset + delta) % BLOCK_SIZE;
        
        graphics.rotation += 0.001 * delta;
        for(let x = 0; x < 2 * WIDTH; x += BLOCK_SIZE + SPACING) {
            for(let y = 0; y < 2 * HEIGHT; y += BLOCK_SIZE + SPACING) {
                if(Math.random() < 0.001) {
                    graphics.beginFill(getRandomArbitrary(0x000000, 0xFFFFFF));
                    graphics.drawRect(x, y, BLOCK_SIZE - SPACING, BLOCK_SIZE - SPACING);
                    graphics.endFill();
                }
            }
        }
    });

    document.body.appendChild(app.view);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

init();