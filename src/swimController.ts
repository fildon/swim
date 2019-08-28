import PlayerFish from "./playerFish";
import Canvas from "./canvas";

export default class SwimController {
    player: PlayerFish
    canvas: Canvas
    constructor() {
        this.canvas = new Canvas();
        this.player = new PlayerFish();
    }

    start() {
        this.tick();
    }

    draw() {
        this.canvas.draw(this.player);
    }

    step() {
        this.player.step();
    }

    tick() {
        setTimeout(() => this.tick(), 20); // 50 frames a second
        this.draw();
        this.step();
    }
}
