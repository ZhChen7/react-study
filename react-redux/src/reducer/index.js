/*
 * @Author: zhouchen 
 * @Date: 2020-10-26 14:57:09 
 * @Last Modified by: zhouchen
 * @Last Modified time: 2020-10-26 16:19:45
 */


const demoInitialState = {
    value: '默认值'
}
const reducer = (state = demoInitialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, ...action
            }
            default:
                return state
    }
}

module.exports = {
    reducer
}