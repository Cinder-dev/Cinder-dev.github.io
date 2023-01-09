const WIDTH = 480;
const HEIGHT = 320;

const BLOCK_SIZE = 16;

function init() {
    document.onclick = () => window.location.reload();
    let app = new PIXI.Application({width: WIDTH, height: HEIGHT });
    let graphics = new PIXI.Graphics();

    for(let x = 0; x < WIDTH; x += BLOCK_SIZE) {
        for(let y = 0; y < HEIGHT; y += BLOCK_SIZE) {
            graphics.beginFill(getRandomArbitrary(0x000000, 0xFFFFFF));
            graphics.drawRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
            graphics.endFill();
        }
    }

    app.stage.addChild(graphics);

    document.body.appendChild(app.view);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

init();