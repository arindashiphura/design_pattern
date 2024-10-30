//Fulfillment of ISP
interface Eater {
    eat(): void;
}

interface Flyer {
    fly(): void;
}

interface Swimmer {
    swim(): void;
}

class Duck implements Eater, Flyer, Swimmer {
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

class Fish implements Eater, Swimmer {
    eat() {
        console.log("Fish is eating");
    }
    swim() {
        console.log("Fish is swimming");
    }
}
