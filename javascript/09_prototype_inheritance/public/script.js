//Prototype inheritance

function Universe(){
    var instance;
    Universe = function Universe(){
        return instance;
    }
    //Tämä johtaa ongelmiin
    Universe.prototype = this;

    instance = new Universe;
    instance.constructor = Universe;
    instance.size = 0;
    instance.bang = "big";

}


function start(){

    let HelloWorld = function(){
        this.name = "Hello";
        this.message = "World";
    }

    let helloInstance = new HelloWorld();

    HelloWorld.prototype.name = "Ville";
    HelloWorld.prototype.message2 = "Goodbye";

    console.log(helloInstance.name);
    console.log(helloInstance.message);
    console.log(helloInstance.message2);
    console.log(helloInstance);

    /* Nimi ja message on instanssin nimi ja message, vaikka protoyypin tidot löytyisi myös. 
    Vain kun pyydetään tietoa, jota ekalla instassilla ei ole, annetaan prototyypin tieto message2.

    Konsoli: Hello
    World
    Goodbye
    Objekti tiedot: Hello, World ja prototyppin tiedot: Ville, Goodbye
    */

    let helloInstance2 = new HelloWorld();
    helloInstance2.name = "test";
    console.log(helloInstance2.name);
    console.log(helloInstance2);
    //Vaikka on eri instanssit, niillä on sama prototyyppi

    //Universumi testit. uni2 ylikirjoittaa prototyypin.
    Universe.prototype.nothing = true;
    let uni1 = new Universe();
    console.log(uni1);
    let uni2 = new Universe();
    uni2.everything = true;
    console.log(uni1);
    console.log(uni2);
    
    
}

