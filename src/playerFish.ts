import Point from "./point";

export default class PlayerFish {
    position: Point;
    up = false;
    down = false;
    left = false;
    right = false;
    constructor() {
        this.position = new Point(window.innerWidth / 2, window.innerHeight / 2);
        window.addEventListener("keyup", (event: KeyboardEvent) => {
            this.handleKeyUp(event);
        });
        window.addEventListener("keydown", (event: KeyboardEvent) => {
            this.handleKeyDown(event);
        });
    }

    handleKeyUp(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowDown":
                this.down = false;
                break;
            case "ArrowUp":
                this.up = false;
                break;
            case "ArrowLeft":
                this.left = false;
                break;
            case "ArrowRight":
                this.right = false;
                break;
            default:
                return;
          }
    }

    handleKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowDown":
                this.down = true;
                break;
            case "ArrowUp":
                this.up = true;
                break;
            case "ArrowLeft":
                this.left = true;
                break;
            case "ArrowRight":
                this.right = true;
                break;
            default:
                return;
          }
    }

    step() {
        let xDiff = +this.right-+this.left;
        let yDiff = +this.down-+this.up;
        this.position.x += xDiff;
        this.position.y += yDiff;
    }
}
