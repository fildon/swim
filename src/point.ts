export default class Point {
    constructor(public x: number, public y: number) {}
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

    hasLength() {
        return this.x || this.y;
    }

    toHeading() {
        return Math.atan2(this.y, this.x);
    }
}
