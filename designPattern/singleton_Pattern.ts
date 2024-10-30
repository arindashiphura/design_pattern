class President {
    private static instance: President;

    private constructor() {}

    public static getInstance(): President {
        if (!President.instance) {
            President.instance = new President();
        }
        return President.instance;
    }

    public announce(): string {
        return "The President is announcing: Hello, citizens!";
    }
}

// Usage
const president1 = President.getInstance();
const president2 = President.getInstance();

console.log(president1.announce());
console.log(president2.announce());

console.log(president1 === president2);




class LionKing {
    private static instance: LionKing;  // Holds the single instance of LionKing

    // Private constructor to prevent creating multiple instances
    private constructor() {}

    // Static method to provide access to the single instance
    public static getInstance(): LionKing {
        if (!LionKing.instance) {
            LionKing.instance = new LionKing();
        }
        return LionKing.instance;
    }

    // Method to display a roar (representing the Lion King's presence)
    public roar(): string {
        return "The Lion King roars: Roaaarrr!";
    }
}

// Usage

const lionKing1 = LionKing.getInstance();
const lionKing2 = LionKing.getInstance();

console.log(lionKing1.roar());  // Output: The Lion King roars: Roaaarrr!
console.log(lionKing2.roar());  // Output: The Lion King roars: Roaaarrr!

// Verify that both references point to the same instance
console.log(lionKing1 === lionKing2);  // Output: true
