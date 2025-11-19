// oop - class - object

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("Dogesh Bhai", "dog", "ghue");
const cat = new Animal("cat ", "vai", "muo mouo ");

console.log(dog.name, dog.sound, dog.species);

dog.makeSound();
cat.makeSound();

