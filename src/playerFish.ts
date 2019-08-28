import Vector from "./vector";
import UserInputHandler from "./userInputHandler";

export default class PlayerFish {
    position: Vector;
    heading = 0;
    speed = 0;
    history: Vector[] = [];
    readonly historyLength = 5;
    readonly userInputHandler: UserInputHandler;
    constructor() {
        this.position = new Vector(
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
        const direction = this.userInputHandler.directionInput();
        this.heading += Math.max(-0.1, Math.min(0.1, direction));
        this.speed += Math.max(0, 0.5 - 0.5 * Math.abs(1 - Math.abs(direction / 10)));
        this.speed *= 0.98;
        this.position = this.position.add(
            new Vector(
                this.speed * Math.cos(this.heading),
                this.speed * Math.sin(this.heading)
            )
        );
    }

    updateHistory() {
        this.history.push(this.position);
        this.history = this.history.slice(1);
    }
}
