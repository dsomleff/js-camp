class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.` 
        })

        return bio
    }

    /**
     * @param {string} fullName
     */
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(firsName, lastName, age, position, likes) {
        super(firsName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grades) {
        super(firstName, lastName, age, likes)
        this.grades = grades
    }
    getBio() {
        const status =  this.grades >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the test`
    }
    changeGrade(grade) {
        this.grades += grade 
    }
}

const meow = new Employee('Dusya', 'The Cat', 14, 'Coder', ['eat', 'sleep'])
meow.fullName = 'Juka Juk'
console.log(meow.getBio())

