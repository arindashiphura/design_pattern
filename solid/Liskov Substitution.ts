//violating
class Bird {
    fly() {
        console.log("Flying!");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins cannot fly!");
    }
}


//not violating

