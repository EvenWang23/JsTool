import ArrayList from '../src/util/ArrayList.js'
import expect from 'expect.js'

describe('ArrayList.', () => {
    it('add', () => {
        const list = new ArrayList()
        list.add(1)
        list.add(2)
        list.add(3)
        expect(list.size()).be(3)
        expect(list.get(0)).be(1)
        expect(list.get(1)).be(2)
        expect(list.get(2)).be(3)
    })

    it('insert', () => {
        const list = new ArrayList()
        list.add(1)
        expect(list.get(0)).be(1)
        expect(list.size()).be(1)
        list.insert(-1, 0)
        expect(list.get(0)).be(-1)
        expect(list.get(1)).be(1)
        expect(list.size()).be(2)
    })


    it('isEmpty', () => {
        const list = new ArrayList()
        expect(list.isEmpty()).be(true)
        list.add(1)
        expect(list.isEmpty()).be(false)
    })

    it('contains', () => {
        const list = new ArrayList()
        list.add(1)
        expect(list.contains((e) => e === 1)).be(true)
        expect(list.contains((e) => e === 2)).be(false)
    })

    it('indexOf', () => {
        const list = new ArrayList()
        list.add(1)
        expect(list.indexOf((e) => e === 1)).be(0)
        expect(list.indexOf((e) => e === 2)).be(-1)
    })

})