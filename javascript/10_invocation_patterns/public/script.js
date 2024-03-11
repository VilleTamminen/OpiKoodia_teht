//invocation patterns

function start(){
    console.log("---------------------------- Method invocation Pattern ---------------------");

    var person = {
        name:"Calvin",
        age:25,
        greet:function(){
            console.log("Hellow, my name is ",this.name);
        }
    }
    person.greet();

    console.log("---------------------------- Function invocation Pattern ---------------------");

    person.calculateAge = function(years){
        function calculateYears(){
            //Virhe: this ei toimi, kun se on 2 funktiota sisempänä
            return this.age + years;
        }
        //Bind korjaa this käytön virheen ylemmässä funktiossa. Ny viite toimiii
        calculateYears = calculateYears.bind(this);
        console.log("I will be " + calculateYears() + " old in " + years + " years.");
    }
    person.calculateAge(10);

    console.log("---------------------------- Constructor invocation Pattern ---------------------");

    var Person2 = function(name){
        this.name = name;
    }
    Person2.prototype.greet = function(){
        return this.name + " says hello";
    }
    console.log(new Person2("Calvin").greet());

    console.log("---------------------------- Constructor invocation Pattern ---------------------");

    Person2.prototype.waveTo = function(who){
        return this.name + " waves to " + who.name;
    }

    let calvin = new Person2("Calvin");
    let hobbes = new Person2("Hobbes");
    let rover = Object.create({"name":"Rover"});

    //Huomaa: rover ei tarvi funktiota, se tarvitsee vain nimen
    console.log(calvin.waveTo.apply(hobbes,[calvin]));
    console.log(calvin.waveTo.apply(rover,[hobbes]));
    console.log(calvin.waveTo(hobbes));
}

