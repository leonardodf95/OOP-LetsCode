import { Animal } from "./classes/animal.js";
import { Papagaio } from "./classes/papagaio.js";
import { Cachorro } from "./classes/cachorro.js";
import { Gato } from "./classes/gato.js";

const animal = new Animal("Nika", "mamífero", "noturno", "false","grande", "carnívoro", "femea", false, 3, 4, true);
const papagaio = new Papagaio("Reginaldo", "do Mangue", "ave", "diurno", false, "médio", "herbívoro","macho", true, 2, 4, true);
const cachorro = new Cachorro("Bruno", "caramelo", "mamífero", "diurno",true , "grande",'' , 'macho', true, 1, 4, true);
const gato = new Gato("Preta", 'vira-lata', 'mamífero', 'noturno',true,'pequeno','', 'femea', true, 1, 20, true);

console.log(papagaio);
papagaio.acordar();
papagaio.incrementoIdade();
papagaio.incrementoIdade();
//papagaio.incrementoIdade(); //<-- Aqui ele morre 
console.log(papagaio.info());

console.log(cachorro);
cachorro.acordar();
cachorro.incrementoIdade();
cachorro.incrementoIdade();
cachorro.incrementoIdade();
console.log(cachorro.info());
cachorro.dormir();
console.log(cachorro.info());


console.log(animal);
animal.acordar();
animal.incrementoIdade();
console.log(animal.info());
animal.dormir();
console.log(animal.info());

console.log(gato);
gato.acordar();
gato.incrementoIdade();
gato.incrementoIdade();
gato.incrementoIdade();
console.log(gato.info());
gato.dormir();
console.log(gato.info());