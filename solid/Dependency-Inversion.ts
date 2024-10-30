// 2. Implementing the Dependency Inversion Principle


// Animal interface defining the contract for all animals
interface Animal {
    makeSound(): string; // All animals must implement this method
}

// Dog class implementing the Animal interface
class Dog implements Animal {
    makeSound(): string {
        return 'Woof!';
    }
}

// Cat class implementing the Animal interface
class Cat implements Animal {
    makeSound(): string {
        return 'Meow!';
    }
}

// Cow class implementing the Animal interface
class Cow implements Animal {
    makeSound(): string {
        return 'Moo!';
    }
}

// AnimalSound class depending on the Animal abstraction
class AnimalSound {
    getSound(animal: Animal): string {
        return animal.makeSound(); // Dependency on abstraction
    }
}

// Usage
const dog: Animal = new Dog();
const cat: Animal = new Cat();
const cow: Animal = new Cow();

const animalSound = new AnimalSound();
console.log(animalSound.getSound(dog)); // Output: Woof!
console.log(animalSound.getSound(cat)); // Output: Meow!
console.log(animalSound.getSound(cow)); // Output: Moo!

// New animal class for Sheep
class Sheep implements Animal {
    makeSound(): string {
        return 'Baa!';
    }
}

// Adding a new animal without modifying AnimalSound
const sheep: Animal = new Sheep();
console.log(animalSound.getSound(sheep)); // Output: Baa!
