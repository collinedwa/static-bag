const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(20)
        expect(bag.weight).toBe(20)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    test('bag exceeds max weight', () => {
        expect(() => new Bag(25)).toThrow();
    })
})