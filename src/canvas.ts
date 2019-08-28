import PlayerFish from "./playerFish";
import Vector from "./vector";

export default class Canvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    fishSize = 4;
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
        this.drawPlayerTail(player.history);
        this.drawPlayerBody(player.position);
        this.drawPlayerBeak(player);
    }

    drawPlayerTail(points: Vector[]) {
        points.forEach((point, i) => {
            this.drawPlayerSegment(
                point,
                this.fishSize * ((i + 1)/6)
            );
        });
    }

    drawPlayerBody(position: Vector) {
        this.drawPlayerSegment(position, this.fishSize);
    }

    drawPlayerSegment(position: Vector, radius: number) {
        this.ctx.beginPath();
        this.ctx.arc(
            position.x,
            position.y,
            radius,
            0, 2 * Math.PI
        );
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
    }

    drawPlayerBeak(player: PlayerFish) {
        this.ctx.beginPath();
        this.ctx.arc(
            player.position.x + this.fishSize * Math.cos(player.heading),
            player.position.y + this.fishSize * Math.sin(player.heading),
            2,
            0, 2 * Math.PI
        );
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
}
