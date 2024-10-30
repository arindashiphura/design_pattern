// Base class
abstract class Animal {
    abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

class Cow extends Animal {
    makeSound() {
        return "Moo!";
    }
}

// Now, when you add a new animal, you don't change old ones
const animals: Animal[] = [new Dog(), new Cat(), new Cow()];
animals.forEach(animal => console.log(animal.makeSound()));
