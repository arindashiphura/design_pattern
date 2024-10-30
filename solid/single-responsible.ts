//S - Single Responsibility Principle (SRP)

// Each thing (class) should have only one job. Imagine if you were given too many tasks, you might get confused! It’s the same with code
//Wrong way (doing too many things in one place):
class ToyCar {
    moveForward() {
        console.log("The car moves forward.");
    }

    playMusic() {
        console.log("Playing music.");
    }
}


//Correct way (separating concerns):
class Movement {
    moveForward() {
        console.log("The car moves forward.");
    }
}

class Music {
    playMusic() {
        console.log("Playing music.");
    }
}

const movement = new Movement();
const music = new Music();
movement.moveForward();
music.playMusic();
