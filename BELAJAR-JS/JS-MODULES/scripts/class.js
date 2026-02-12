export class Person {
    constructor(name) {
        this.name = name
    }

    sayHello(name) {
        console.info(`Halo ${name} my name is ${this.name}`)
    }
}