//literal object

var food = {
    edible: true
}
food.edible = true

//this is the same thing

//New Object -- no difference, just a different process
var food = new Object()
food.edible = true
var pizza = food
pizza.edible = false
console.log(pizza)
console.log(food)

//within this example, above, the computer will create aliases and give inaccurate results

//better option

food.edible = true
var pizza = Object.create(food) //this is how you clone something and makes new entity
pizza.edible - false
console.log(pizza)
console.log(food)

// Constructor function approach -- must capitalize the first letter within the var name

var Food = function() {
    this.edible = true
    this.totalEaten = 0
    this.eat = function() {
        this.totalEaten++
        console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
    }
}

//this function is meant to be cloned... not run, directly
//the variables are instances of the function



var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)



var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
console.log(pizza2)

Food.prototype.calories = 1200 //this gives you the opportunity to update the master copy retroactively


class Vehicle {
    constructor(make, model) { //a function that runs the code at the beginning (when its made)
        this.make = make
        this.model = model
        this.year  //this does not exist until you make a copy. Must be set with a bind because its a method

        this.setYear = this.setYear.bind(this)
    }

    setYear(year) {
        this.year = year + ' year'
    }

    drive(speed) {
        console.log(`${make} ${model} is driving ${year}mph.`)
    }
}

class Toyota extends Vehicle {
    constructor(model) {
        super('Toyota', model)   //this line is necessary, it refers to the parent class that we have extended
        this.make = 'Toyota'
    }
}
class Ford extends Vehicle {
    constructor(model) {
        super('Ford', model)   //this line is necessary, it refers to the parent class that we have extended
        this.make = 'Ford'
    }
}

var $4Runner = new Toyota('4Runner')
$4Runner.setYear(2006)
console.log($4Runner)

var Mustang = new Ford('Mustang')
Mustang.setYear(2016)
console.log(Mustang)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)


//I want to make a Toyota class


class Person {
    constructor(occupation, firstName, lastName, battingAverage) { //a function that runs the code at the beginning (when its made)
        this.occupation = occupation
        this.firstName = firstName
        this.lastName = lastName
        // this.battingAverage = battingAverage
        // this.yearOfBirth  //this does not exist until you make a copy. Must be set with a bind because its a method
        //
    }
}

class Athlete extends Person {
    constructor(firstName, lastName, battingAverage) {
        super('BaseballPlayer', firstName, lastName)
        this.battingAverage = battingAverage
    }
}

var baseballPlayer = new Athlete('Tom', 'Jones', '400')
baseballPlayer.battingAverage = 400
console.log(baseballPlayer)
console.log(baseballPlayer.firstName + ' ' + baseballPlayer.lastName + ' owes me money, with his ' + baseballPlayer.battingAverage + ' batting Average')

    // setYear(yearOfBirth) {
    //     this.yearOfBirth = yearOfBirth + ' year'
    // }



// class Athlete extends Person {
//     constructor(occupation) {
//         super('Athlete', firstName, lastName)
//         this.occupation = 'Athlete'
//     }
// }
// var baseballPlayer = new BaseballPlayer('Tim', 'Rogers')
// baseballPlayer.year = 1992
// console.log(baseballPlayer)
