var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Implementations of Engine
var PetrolEngine = /** @class */ (function () {
    function PetrolEngine() {
    }
    PetrolEngine.prototype.startEngine = function () {
        return "Starting a petrol engine!";
    };
    return PetrolEngine;
}());
var ElectricEngine = /** @class */ (function () {
    function ElectricEngine() {
    }
    ElectricEngine.prototype.startEngine = function () {
        return "Starting an electric engine!";
    };
    return ElectricEngine;
}());
// Abstraction Class
var Vehicle = /** @class */ (function () {
    function Vehicle(engine) {
        this.engine = engine;
    }
    Vehicle.prototype.move = function () {
        console.log("Vehicle is moving with engine: " + this.engine.startEngine());
    };
    return Vehicle;
}());
// Refined Abstraction for Car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(engine) {
        return _super.call(this, engine) || this;
    }
    Car.prototype.move = function () {
        console.log("Car is moving...");
        _super.prototype.move.call(this);
    };
    return Car;
}(Vehicle));
// Refined Abstraction for Truck
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine) {
        return _super.call(this, engine) || this;
    }
    Truck.prototype.move = function () {
        console.log("Truck is moving...");
        _super.prototype.move.call(this);
    };
    return Truck;
}(Vehicle));
// Usage
var petrolEngine = new PetrolEngine();
var electricEngine = new ElectricEngine();
var carWithPetrolEngine = new Car(petrolEngine);
var truckWithElectricEngine = new Truck(electricEngine);
carWithPetrolEngine.move(); // Output: "Car is moving... Vehicle is moving with engine: Starting a petrol engine!"
truckWithElectricEngine.move(); // Output: "Truck is moving... Vehicle is moving with engine: Starting an electric engine!"
// Concrete Implementations of Device
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV is turned on");
    };
    TV.prototype.turnOff = function () {
        console.log("TV is turned off");
    };
    return TV;
}());
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.turnOn = function () {
        console.log("Radio is turned on");
    };
    Radio.prototype.turnOff = function () {
        console.log("Radio is turned off");
    };
    return Radio;
}());
// Abstraction: RemoteControl
var RemoteControl = /** @class */ (function () {
    function RemoteControl(device) {
        this.device = device;
    }
    RemoteControl.prototype.togglePower = function () {
        console.log("Toggling power...");
        this.device.turnOn();
    };
    return RemoteControl;
}());
// Refined Abstraction: Advanced Remote Control with extra features
var AdvancedRemoteControl = /** @class */ (function (_super) {
    __extends(AdvancedRemoteControl, _super);
    function AdvancedRemoteControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedRemoteControl.prototype.mute = function () {
        console.log("Muting the device...");
    };
    return AdvancedRemoteControl;
}(RemoteControl));
// Usage
var tv = new TV();
var tvRemote = new RemoteControl(tv);
tvRemote.togglePower(); // Output: TV is turned on
var radio = new Radio();
var radioRemote = new AdvancedRemoteControl(radio);
radioRemote.togglePower(); // Output: Radio is turned on
radioRemote.mute(); // Output: Muting the device...
