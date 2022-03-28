import { Animal } from "./animal.js";

class Gato extends Animal {
    #raca
    constructor (nome=null, raca=null, classe=null, habito=null, domestico=true, porte=null, alimentacao=null, genero=null, acordado=false, idade=null, expecDeVida = 20, vivo = true) {
        super(nome,classe,habito,domestico,porte,alimentacao,genero,acordado,idade,expecDeVida,vivo)
        this.#raca = raca;
    }

    info(){
        return `O Gato da raça ${this.#raca} chamado ${this.nome}, ${this.genero}, de hábitos ${this.habito} está ${(this.vivo)?`com ${this.idade} anos de idade e ${(this.acordado)? 'acordado.' : 'dormindo.'}` : 'morto...'}`
    }
}

export {Gato};