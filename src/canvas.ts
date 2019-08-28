import PlayerFish from "./playerFish";

export default class Canvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor() {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.setScreenSize();
    }

    setScreenSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw(player: PlayerFish) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.setScreenSize();
        this.drawPlayer(player);
    }

    drawPlayer(player: PlayerFish) {
        this.drawPlayerBody(player);
        this.drawPlayerBeak(player);
    }

    drawPlayerBody(player: PlayerFish) {
        this.ctx.beginPath();
        this.ctx.arc(
            player.position.x,
            player.position.y,
            10,
            0, 2 * Math.PI
        );
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }

    drawPlayerBeak(player: PlayerFish) {
        this.ctx.beginPath();
        this.ctx.arc(
            player.position.x + 10 * Math.cos(player.heading),
            player.position.y + 10 * Math.sin(player.heading),
            2,
            0, 2 * Math.PI
        );
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
}
