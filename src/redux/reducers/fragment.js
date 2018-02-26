import {GET_FRAGMENT_REQUEST, GET_FRAGMENT_SUCCESS, GET_FRAGMENT_FAIL} from 'actions/fragment'


const initState = {
    isLoading: false,
    fragment: {},
    errorMsg: ''
}

export default function fragment(state = initState, action) {
    switch (action.type) {
        case GET_FRAGMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                fragment: {},
                errorMsg: ''
            }
        case GET_FRAGMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fragment: action.result.data,
                errorMsg: ''
            }
        case GET_FRAGMENT_FAIL:
            return {
                ...state,
                isLoading: false,
                fragment: {},
                errorMsg: '请求错误'
            }
        default:
            return state
    }
}