import { LOADDATA } from './actionType'
import { Map, fromJS, List  } from 'immutable'

const defaultState = Map({
    list: []
})

// 测试immutable

const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } })

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
const nested3 = nested.merge({ a: { b: { d: 6 } } });
console.log('nested2', nested2)
console.log('nested3', nested3)

//Map的使用
const m1 = Map({a:1,b:2,c:{d:3}})
const m2 = m1.set('b', 4)
console.log('map', m1, m2) // {a:1,b:2,c:{d:3}}  {a:1,b:4,c:{d:3}}
const m3 = m1.set('b', 4)
console.log('m2 === m3', m2 === m3) // false
const m4 = m3.set('b', 4)
console.log('m3 === m4', m4 === m3) // true

// immutable转成js
const deep = Map({ a: 1, b: 2, c: List([ 3, 4, 5 ]), d: [1,2,3,{g:'g'}] });
console.log('toObject', deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log('toArray', deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log('toJS', deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }

///////////////////////

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case LOADDATA:
            return state.set('list', action.list)
            // return {
            //     list: action.list
            // }
        default:
            return state
    }
}

export default reducer