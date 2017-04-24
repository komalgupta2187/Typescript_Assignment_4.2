class animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
   move(distance: number=0): void { console.log(`Distance covered: ${distance}`) }
	makeSound():void{};
    }

class snake extends animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class horse extends animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

class dog extends animal{
 constructor(name:string) {super(name);}
 move(distanceInMeters=25){
     console.log("Bulldog...");
     super.move(distanceInMeters);
 }
}
class cat extends animal{
    constructor(name:string){super(name);}
    move(disanceInmeters=20){
        console.log("Persian cat");
        super.move(disanceInmeters);
    }
    } 

let Sam = new snake("Sammy the Python");
let Tom: animal = new horse("Tommy the Palomino");
let Tommy:animal=new dog("Lucy the Dog");
let pussy:animal=new cat("Pussy the cat");
Sam.move();
Tom.move(34);
Tommy.move(10);
pussy.move(5);