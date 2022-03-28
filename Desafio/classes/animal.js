class Animal {
    #nome;
    #classe;
    #habito;
    #domestico;
    #porte;
    #alimentacao;
    #acordado;
    #idade;
    #expecDeVida;
    #vivo;
    #genero;

    
    constructor(nome=null, classe=null, habito=null, domestico=false, porte=null, alimentacao=null, genero=null, acordado=false, idade=null, expecDeVida = 20, vivo = true){
        this.#nome = nome;
        this.#classe = classe;
        this.#habito = habito;
        this.#domestico = domestico;
        this.#porte = porte;
        this.#alimentacao = alimentacao;
        this.#genero = genero;
        this.#acordado = acordado;
        this.#idade = idade;
        this.#expecDeVida = expecDeVida;
        this.#vivo = vivo
    }

    get nome(){
        return this.#nome;
    }
    get habito(){
        return this.#habito;
    }
    get domestico(){
        return this.#domestico;
    }
    get porte(){
        return this.#porte;
    }
    get acordado(){
        return this.#acordado;
    }
    get idade(){
        return this.#idade;
    }
    get vivo(){
        return this.#vivo;
    }
    get genero(){
        return this.#genero;
    }



    acordar(){
        return this.#acordado = true;
    }

    dormir(){
        return this.#acordado = false;
    }

    incrementoIdade(){
        if (this.#idade<this.#expecDeVida && this.#vivo){
            return this.#idade += 1;
        }
        return this.#vivo=false;
    }

    info(){
        return `O animal ${this.#classe}, ${this.#genero}, chamado ${this.#nome} de porte ${this.#porte} e hábitos ${this.#habito} está ${(this.#vivo)?`com ${this.#idade} anos de idade e ${(this.#acordado)? 'acordado.' : 'dormindo.'}` : 'morto...'}`
    }
}

export { Animal };