var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = (function () {
    function animal(theName) {
        this.name = theName;
    }
    animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Distance covered: " + distance);
    };
    animal.prototype.makeSound = function () { };
    ;
    return animal;
}());
var snake = (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        return _super.call(this, name) || this;
    }
    snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return snake;
}(animal));
var horse = (function (_super) {
    __extends(horse, _super);
    function horse(name) {
        return _super.call(this, name) || this;
    }
    horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return horse;
}(animal));
var dog = (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 25; }
        console.log("Bulldog...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return dog;
}(animal));
var cat = (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        return _super.call(this, name) || this;
    }
    cat.prototype.move = function (disanceInmeters) {
        if (disanceInmeters === void 0) { disanceInmeters = 20; }
        console.log("Persian cat");
        _super.prototype.move.call(this, disanceInmeters);
    };
    return cat;
}(animal));
var Sam = new snake("Sammy the Python");
var Tom = new horse("Tommy the Palomino");
var Tommy = new dog("Lucy the Dog");
var pussy = new cat("Pussy the cat");
Sam.move();
Tom.move(34);
Tommy.move(10);
pussy.move(5);
