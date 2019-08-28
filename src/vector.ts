export default class Vector {
    length: number;
    constructor(public x: number, public y: number) {
        this.length = Math.sqrt(
            Math.pow(this.x, 2) + Math.pow(this.y, 2)
        );
    }

    add(vector: Vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
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
        return new Vector(this.x * scale, this.y * scale);
    }

    rotate(radians: number) {
        return new Vector(
            this.x * Math.cos(radians) - this.y * Math.sin(radians),
            this.x * Math.sin(radians) + this.y * Math.cos(radians),
        );
    }
}
