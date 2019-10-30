// Parent class
// It describes the methods common for all children
// Example:
// let quadrilateral = new Quadrilateral(2, 2, 3, 3)
// quadrilateral.getPerimeter()
class Quadrilateral {
    // Is called upon class creation
    constructor(a, b, c, d) {
        // Properties for Quadrilateral sides lengths
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    // Returns perimeter of a figure
    getPerimeter() {
        return this.a + this.b + this.c + this.d
    }
}

// Child class of Quadrilateral
// Word 'extends' describe inheritance
class Square extends Quadrilateral {
    constructor(a) {
        // Super() means - call parents constructor
        // Super() is mandatory for child classes
        super(a, a, a, a);
    }

    // Returns square area
    getArea() {
        return this.a * this.a
    }
}

// Similar as Square but rectangle
class Rectangle extends Quadrilateral {
    constructor(a, b) {
        super(a, a, b, b)
    }

    getArea() {
        return this.a * this.c
    }
}

// Create new class instance
let square = new Square(2);
// Call Parents method
square.getPerimeter();
// Call it's own method
square.getArea();

// Similar to example above
let rectangle = new Rectangle(2, 4);
rectangle.getPerimeter();
rectangle.getArea();