class Ninja {
    constructor(firstName, hp, speed, strength){
    this.firstName = firstName;
    this.health = hp;
    this.speed = speed;
    this.strength = strength;
    }

    sayName () {
        console.log(`Duel time ${this.firstName}`);
    }

    showStats () {
        console.log(`${this.firstName}'s hp is ${this.hp}, speed is ${this.speed}, and strength is ${this.strength}.`)
    }

    drinkSake () {
        console.log(`Fighting drunk ftw`)
        this.hp += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(firstName, wisdom){
    super(firstName, 100, 50, 80);
    this.wisdom = 10; 
}
    speakWisdom () {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}


const samurai = new Ninja("samurai", 100, 100, 100);
samurai.sayName();
samurai.showStats();
samurai.drinkSake();
