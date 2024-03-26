/*
 * ICS4U - Mr. Brash 🐿️
 * 2.5 - Classes
 *
 * Classes are BLUEPRINTS of an abstract data type.
 * To create a copy of one (called an instance) we use "new"
 * See the README.md file.
 * 
 * Author: Selena
 */

'use strict';

class Circle {
    name = "Circle";
    radius = 1;

    area(){
        let a=2*Math.PI*this.radius*this.radius;
        return a;
    }
    circumference(){
        let c=2*Math.PI*this.radius;
        return c;
    }
}

class Rectangle {
    name = "Rectangle";
    length = 1;
    width = 1;

    area(){
        let a=this.length * this.width;
        return a;
    }
    perimeter(){
        let p=2*(this.length+this.width);
        return p;
    }
    is_square(){
        if(this.length==this.width){
            return true;
        }
        return false;
    }
}

class Vehicle {
    type = "";
    num_wheels = 0;
    num_doors = 0;
    num_seats = 0;
    fuel = "";
    can_fly = false;
}

let circle1 = new Circle();
let rect2 = new Rectangle();
rect1.name = "Best Rectangle Ever!";
rect1.length = 10;
rect1.width = 20;
rect2.name = "Square"
rect2.length = 5;
rect2.width = rect2.length;
console.log(rect1.is_square());
console.log(rect2.is_square());
