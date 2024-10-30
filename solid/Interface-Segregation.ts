//4. Interface Segregation Principle (ISP)
// Violation of ISP
interface Animal {
    eat(): void;
    fly(): void;
    swim(): void;
}

class Duck implements Animal {
    eat() {
        console.log("Duck is eating");
    }
    fly() {
        console.log("Duck is flying");
    }
    swim() {
        console.log("Duck is swimming");
    }
}

class Fish implements Animal {
    eat() {
        console.log("Fish is eating");
    }
    fly() {
        throw new Error("Fish can't fly");
    }
    swim() {
        console.log("Fish is swimming");
    }
}
