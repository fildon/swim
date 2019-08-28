export default class Point {
    length: number;
    constructor(public x: number, public y: number) {
        this.length = Math.sqrt(
            Math.pow(this.x, 2) + Math.pow(this.y, 2)
        );
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

    hasLength() {
        return this.x || this.y;
    }

    toHeading() {
        return Math.atan2(this.y, this.x);
    }

    unitVector() {
        return this.length
            ? new Point(this.x / this.length, this.y / this.length)
            : this;
    }
}
