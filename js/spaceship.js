//Object literal

var spaceship1 = {
    topSpeed: 'lyph',
    name: 'Galaxy Cruiser',
    fly: function(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + ' ' + this.topSpeed + '!')
    }
}

spaceship1.fly(65)

// Object New
var spaceship2 = new Object()
spaceship2.name = 'Galaxy Cruiser',
spaceship2.topSpeed = 'lyph',
spaceship2.fly = function(speed) {
    console.log(this.name + ' launching to infinity and beyond at ' + speed + ' ' + this.topSpeed + '!')
}

spaceship2.fly(35)

// Constructor Function

var spaceShip3 = function() {
    this.name = 'Galaxy Cruiser'
    this.topSpeed = 'lyph'
    this.fly = function(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + ' ' + this.topSpeed + '!')
    }
}

var ship = new spaceShip3()

ship.fly(85)

// Class
class Spaceship4 {
    constructor() {
        this.name = 'Galaxy Cruiser'
        this.topSpeed = 'lyph'
    }

    fly(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + ' ' + this.topSpeed + '!')
    }
}

var ship = new Spaceship4()

ship.fly(55)
