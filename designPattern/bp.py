from abc import ABC, abstractmethod

# Implementation Interface
class Engine(ABC):
    @abstractmethod
    def start_engine(self) -> str:
        pass

# Concrete Implementations of Engine
class PetrolEngine(Engine):
    def start_engine(self) -> str:
        return "Starting a petrol engine!"

class ElectricEngine(Engine):
    def start_engine(self) -> str:
        return "Starting an electric engine!"

# Abstraction Class
class Vehicle:
    def __init__(self, engine: Engine):
        self.engine = engine

    def move(self) -> None:
        print("Vehicle is moving with engine:", self.engine.start_engine())

# Refined Abstraction for Car
class Car(Vehicle):
    def move(self) -> None:
        print("Car is moving...")
        super().move()

# Refined Abstraction for Truck
class Truck(Vehicle):
    def move(self) -> None:
        print("Truck is moving...")
        super().move()

# Usage
petrol_engine = PetrolEngine()
electric_engine = ElectricEngine()

car_with_petrol_engine = Car(petrol_engine)
truck_with_electric_engine = Truck(electric_engine)

car_with_petrol_engine.move()  # Output: "Car is moving... Vehicle is moving with engine: Starting a petrol engine!"
truck_with_electric_engine.move()  # Output: "Truck is moving... Vehicle is moving with engine: Starting an electric engine!"
