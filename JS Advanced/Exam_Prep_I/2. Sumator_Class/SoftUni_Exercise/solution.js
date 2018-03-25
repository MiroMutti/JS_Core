const Sumator = require('./input')
const expect = require('chai').expect

describe("Sumator Unit Tests", function() {
    let sumator
    beforeEach(function () {
        sumator = new Sumator ()
    })

    describe('Check if functions exist', function () {
        it('data is not undefined', function () {
            expect(sumator.data !== undefined).to.be.equal(true)
        })

        it('add func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        })

        it('add sum nums exist', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        })

        it('add removeByFilter exist', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        })

        it('add toString exist', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
    })

    it("test if data length is empty", function () {
        expect(sumator.data.length).to.be.equal(0)
    })

    describe("add function tests", function () {
        it("add only numbers", function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.data.join(', ')).to.be.equal('5, 4, 3')
        })

        it("add only strings", function () {
            sumator.add("Pesho")
            sumator.add("Ivo")
            sumator.add("Gosho")
            expect(sumator.data.join(', ')).to.be.equal('Pesho, Ivo, Gosho')
        })

        it("add only objects", function () {
            sumator.add({name: "Pesho"})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]')
        })

        it("add mixed types", function () {
            sumator.add({name: "Pesho"})
            sumator.add(4)
            sumator.add("Pesho")
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 4, Pesho')
        })
    })
    describe("Test sum finction", function () {
        it("Sum only nums", function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.equal(12)
        })

        it("Sum not nums", function () {
            sumator.add("Pesho")
            sumator.add({})
            sumator.add({name: "Pesho"})
            expect(sumator.sumNums()).to.be.equal(0)
        })

        it("Sum mixed", function () {
            sumator.add("Pesho")
            sumator.add({})
            sumator.add(3)
            sumator.add(4)
            expect(sumator.sumNums()).to.be.equal(7)
        })
    })

    describe("Test remove by filter", function () {
        it("removes all odd Numbers", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x % 2 !== 0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        })

        it("removes all odd Numbers", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x > 5 )
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5')
        })
        
        it('throws exception', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            expect(() => sumator.removeByFilter(undefined)).to.throw()
        })
    })

    describe("test toString finction", function () {
        it('with items in array',function () {
            sumator.add(4)
            sumator.add("Pesho")
            expect(sumator.toString()).to.be.equal('4, Pesho')
        })

        it('with empty array',function () {

            expect(sumator.toString()).to.be.equal('(empty)')
        })
    })
})