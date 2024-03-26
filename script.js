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
        let a=Math.PI*this.radius*this.radius;
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
circle1.name = "Best Rectangle Ever!";
circle1.radius = 5;
console.log(circle1.area())
console.log(circle1.circumference());
