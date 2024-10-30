var President = /** @class */ (function () {
    function President() {
    }
    President.getInstance = function () {
        if (!President.instance) {
            President.instance = new President();
        }
        return President.instance;
    };
    President.prototype.announce = function () {
        return "The President is announcing: Hello, citizens!";
    };
    return President;
}());
// Usage
var president1 = President.getInstance();
var president2 = President.getInstance();
console.log(president1.announce());
console.log(president2.announce());
console.log(president1 === president2);
var LionKing = /** @class */ (function () {
    // Private constructor to prevent creating multiple instances
    function LionKing() {
    }
    // Static method to provide access to the single instance
    LionKing.getInstance = function () {
        if (!LionKing.instance) {
            LionKing.instance = new LionKing();
        }
        return LionKing.instance;
    };
    // Method to display a roar (representing the Lion King's presence)
    LionKing.prototype.roar = function () {
        return "The Lion King roars: Roaaarrr!";
    };
    return LionKing;
}());
// Usage
var lionKing1 = LionKing.getInstance();
var lionKing2 = LionKing.getInstance();
console.log(lionKing1.roar()); // Output: The Lion King roars: Roaaarrr!
console.log(lionKing2.roar()); // Output: The Lion King roars: Roaaarrr!
// Verify that both references point to the same instance
console.log(lionKing1 === lionKing2); // Output: true
