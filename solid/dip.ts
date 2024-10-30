//1. Violating the Dependency Inversion Principle

// Dog class
class Dog {
    makeSound(): string {
        return 'Woof!';
    }
}

// Cat class
class Cat {
    makeSound(): string {
        return 'Meow!';
    }
}

// Cow class
class Cow {
    makeSound(): string {
        return 'Moo!';
    }
}

// AnimalSound class directly depending on specific animal classes
class AnimalSound {
    getSound(animal: Dog | Cat | Cow): string {
        return animal.makeSound(); // Direct dependency on Dog, Cat, and Cow
    }
}

// Usage
const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

const animalSound = new AnimalSound();
console.log(animalSound.getSound(dog)); // Output: Woof!
console.log(animalSound.getSound(cat)); // Output: Meow!
console.log(animalSound.getSound(cow)); // Output: Moo!
