import Point from "./point";
import UserInputHandler from "./userInputHandler";

export default class PlayerFish {
    position: Point;
    heading: number;
    userInputHandler: UserInputHandler;
    constructor() {
        this.position = new Point(window.innerWidth / 2, window.innerHeight / 2);
        this.heading = 0;
        this.userInputHandler = new UserInputHandler();
    }

    step() {
        const userVector = this.userInputHandler.userVector();
        this.position = this.position.add(userVector);
        if (userVector.hasLength()) {
            this.heading = userVector.toHeading();
        }
    }
}
