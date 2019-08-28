export default class UserInputHandler {
    left = false;
    right = false;
    leftCount = 0;
    rightCount = 0;
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

    directionInput() {
        if (this.left && !this.right) {
            this.rightCount = 0;
            this.leftCount++;
        }
        else if (this.right && !this.left) {
            this.leftCount = 0;
            this.rightCount++;
        }
        else {
            this.leftCount = 0;
            this.rightCount = 0;
        }
        return this.rightCount - this.leftCount;
    }
}
