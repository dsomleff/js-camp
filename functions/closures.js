const createCount = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCount()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get());

counter.count = 77
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get());

// Adder
// const add = (a, b) => a +b 

const createAdder = (a, c) => {
    return (b) => {
        return a + b + c;
    }
}

const add10 = createAdder(10, 10)
console.log(add10(20));

// Tipper
const createTipper = (percent) => {
    return (amount) => {
        return amount / 100 * percent
    }
}


const tip = createTipper(25)
console.log(tip(100));
console.log(tip(10));

// Test
const test = (a) => {
    return {
        getA() {
            return a
        },
        getB() {
            return b
        }
    }
}

const func = test('ju')
console.log(func.getA())