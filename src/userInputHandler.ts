import Point from "./point";

export default class UserInputHandler {
    up = false;
    down = false;
    left = false;
    right = false;
    constructor() {
        window.addEventListener("keyup", event => {
            this.setArrow(event.key, false);
        });
        window.addEventListener("keydown", event => {
            this.setArrow(event.key, true);
        });
    }

    setArrow(key: string, newState: boolean) {
        switch (key) {
            case "ArrowDown":
                this.down = newState;
                break;
            case "ArrowUp":
                this.up = newState;
                break;
            case "ArrowLeft":
                this.left = newState;
                break;
            case "ArrowRight":
                this.right = newState;
                break;
            default:
                return;
          }
    }

    userVector() {
        const xDiff = +this.right-+this.left;
        const yDiff = +this.down-+this.up;
        return new Point(xDiff, yDiff).unitVector();
    }
}
