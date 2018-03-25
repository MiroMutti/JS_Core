const createList = require('./list-add-swap-shift-left-right')
const expect = require('chai').expect

describe("Test function create list", function() {
    let list = {}

    beforeEach(function () {
        list = createList()
    })
    describe ('add', function () {
        it('can add multiple', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            const str = list.toString()
            expect(str).to.be.equal('pesho, gosho, 5')
        })
    })

    describe ('shiftLeft', function () {
        it('shift correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.shiftLeft()
            const str = list.toString()
            expect(str).to.be.equal('gosho, 5, pesho')
        })
    })

    describe ('shiftRight', function () {
        it('shift correctly', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.shiftRight()
            const str = list.toString()
            expect(str).to.be.equal('5, pesho, gosho')
        })
    })

    describe ('swap', function () {
        it('first index negative', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
           const output = list.swap(-1,2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('first index = length', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(4,2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('first index non-integer', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap('1',2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('first index 0', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(0,2)
            expect(output).to.be.true
            expect(list.toString()).to.be.equal('5, gosho, pesho, 6')
        })

        it('first index 0', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2,0)
            expect(output).to.be.true
            expect(list.toString()).to.be.equal('5, gosho, pesho, 6')
        })

        it('second index negative', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, -1)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('second index negative', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, 4)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('second index non-integer', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, '1')
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('second index bigger than length', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, 6)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('second index bigger than length', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(6, 2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })

        it('both indexes are equal', function () {
            list.add('pesho')
            list.add('gosho')
            list.add(5)
            list.add(6)
            const output = list.swap(2, 2)
            expect(output).to.be.false
            expect(list.toString()).to.be.equal('pesho, gosho, 5, 6')
        })
    })
})