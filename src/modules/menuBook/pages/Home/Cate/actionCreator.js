
const changeSelectTab = val => {
    return {
        type: 'selectTab',
        val
    }
}

const changeCateType = val => {
    return {
        type: 'cateType',
        val
    }
}

const changeCateAside = val => {
    return {
        type: 'cateAside',
        val
    }
}

export default {
    changeSelectTab,
    changeCateType,
    changeCateAside
}