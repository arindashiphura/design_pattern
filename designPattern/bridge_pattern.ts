// Implementation Interface
interface Engine {
    startEngine(): string;
}

// Concrete Implementations of Engine
class PetrolEngine implements Engine {
    startEngine(): string {
        return "Starting a petrol engine!";
    }
}

class ElectricEngine implements Engine {
    startEngine(): string {
        return "Starting an electric engine!";
    }
}

// Abstraction Class
class Vehicle {
    protected engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    move(): void {
        console.log("Vehicle is moving with engine: " + this.engine.startEngine());
    }
}

// Refined Abstraction for Car
class Car extends Vehicle {
    constructor(engine: Engine) {
        super(engine);
    }

    move(): void {
        console.log("Car is moving...");
        super.move();
    }
}

// Refined Abstraction for Truck
class Truck extends Vehicle {
    constructor(engine: Engine) {
        super(engine);
    }

    move(): void {
        console.log("Truck is moving...");
        super.move();
    }
}

// Usage
const petrolEngine = new PetrolEngine();
const electricEngine = new ElectricEngine();

const carWithPetrolEngine = new Car(petrolEngine);
const truckWithElectricEngine = new Truck(electricEngine);

carWithPetrolEngine.move(); // Output: "Car is moving... Vehicle is moving with engine: Starting a petrol engine!"
truckWithElectricEngine.move(); // Output: "Truck is moving... Vehicle is moving with engine: Starting an electric engine!"



// Device interface: This is the Implementor
interface Device {
    turnOn(): void;
    turnOff(): void;
}

// Concrete Implementations of Device
class TV implements Device {
    turnOn(): void {
        console.log("TV is turned on");
    }
    turnOff(): void {
        console.log("TV is turned off");
    }
}

class Radio implements Device {
    turnOn(): void {
        console.log("Radio is turned on");
    }
    turnOff(): void {
        console.log("Radio is turned off");
    }
}

// Abstraction: RemoteControl
class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        console.log("Toggling power...");
        this.device.turnOn();
    }
}

// Refined Abstraction: Advanced Remote Control with extra features
class AdvancedRemoteControl extends RemoteControl {
    mute(): void {
        console.log("Muting the device...");
    }
}

// Usage
const tv = new TV();
const tvRemote = new RemoteControl(tv);
tvRemote.togglePower(); // Output: TV is turned on

const radio = new Radio();
const radioRemote = new AdvancedRemoteControl(radio);
radioRemote.togglePower(); // Output: Radio is turned on
radioRemote.mute();        // Output: Muting the device...
