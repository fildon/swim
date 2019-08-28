import Point from "./point";
import UserInputHandler from "./userInputHandler";

export default class PlayerFish {
    position: Point;
    heading = 0;
    history: Point[] = [];
    readonly historyLength = 5;
    readonly userInputHandler: UserInputHandler;
    constructor() {
        this.position = new Point(
            window.innerWidth / 2,
            window.innerHeight / 2
        );
        for (let i = 0; i < this.historyLength; i++) {
            this.history.push(this.position);
        }
        this.userInputHandler = new UserInputHandler();
    }

    step() {
        this.updateHistory();
        const userVector = this.userInputHandler.userVector();
        if (userVector.hasLength()) {
            this.position = this.position.add(
                userVector.scaleToLength(5)
            );
            this.heading = userVector.toHeading();
        }
    }

    updateHistory() {
        this.history.push(this.position);
        while (this.history.length > this.historyLength) {
            this.history = this.history.slice(1);
        }
    }
}
