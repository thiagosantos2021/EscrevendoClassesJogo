class hero{
        constructor(name, age, tipo, atack){
                this.name = name
                this.age = age
                this.tipo = tipo
                this.atack = atack
        }
        guerreiro(){
            console.log(`${this.tipo} atacou usando ${this.atack}`)
        }
        mage(){
            console.log(`${this.tipo} atacou usando ${this.atack}`)
        }
        monge(){
            console.log(`${this.tipo} atacou usando ${this.atack}`)
        }
        ninja(){
            console.log(`${this.tipo} atacou usando ${this.atack}`)
        }       
}
let warrior = new hero ("Goku","20", "guerreiro" , "espada")
let mage = new hero ("Mestre dos Magos","25","mago", "magia")
let monge = new hero ("Raiden" , "55", "monge" , "artes marciais")
let ninja = new hero ("Ryu Hayabusa" , "35", "ninja" , "shuriken")

//usou espada = 1 ; usou magia = 2 ; usou artes marciais = 3 ; usou shuriken = 4
let hit = "1"

switch (hit) {
    case "1":
        warrior.guerreiro()
    break;
        case "2":
            mage.mage()
        break;
            case "3":
                monge.monge()
            break;
                case "4":
                    ninja.ninja()
                break;
}