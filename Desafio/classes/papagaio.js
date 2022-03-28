import { Animal } from "./animal.js";

class Papagaio extends Animal {
    #especie;
    constructor (nome=null, especie = null, classe=null, habito=null, domestico=false, porte=null,genero=null, alimentacao=null, acordado=false, idade=null, expecDeVida = 20, vivo = true) {
        super (nome,classe,habito,domestico,porte,genero,alimentacao,acordado,idade,expecDeVida,vivo);
        this.#especie = especie;
    }

    info(){
        return `O Papagaio ${this.#especie} chamado ${this.nome}, ${(this.domestico)? "doméstico":"selvagem"}, ${this.genero}, de porte ${this.porte} e hábitos ${this.habito} está ${(this.vivo)?`com ${this.idade} anos de idade e ${(this.acordado)? 'acordado.' : 'dormindo.'}` : 'morto...'}`
    }
}

export {Papagaio};