//O - Open/Closed Principle (OCP)
// Every time you add a new animal, like a cow, you’d have to change this makeSound function
class animal {
    makeSound(type: string) {
        if (type === "dog") {
            return "Woof!";
        } else if (type === "cat") {
            return "Meow!";
        }
    }
}


