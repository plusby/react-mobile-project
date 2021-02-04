import { SWITCHMAP } from './actionTypes'

const changeSwitchMap = (val,action)=> {
    return {
        type: SWITCHMAP,
        val
    }
}

export {
    changeSwitchMap
}