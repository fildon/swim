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
        return this.scaleToLength(1);
    }

    scaleToLength(length: number) {
        return this.length ?
            this.scaleByScalar(length / this.length) :
            this;
    }

    scaleByScalar(scale: number) {
        return new Point(this.x * scale, this.y * scale);
    }
}
