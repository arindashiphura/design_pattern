class Bird {
    move() {
        console.log("Moving!");
    }
}

class Sparrow extends Bird {
    move() {
        console.log("Flying!");
    }
}

class Penguin extends Bird {
    move() {
        console.log("Swimming!");
    }
}

const birds: Bird[] = [new Sparrow(), new Penguin()];
birds.forEach(bird => bird.move());  // Works for both flying and swimming birds
