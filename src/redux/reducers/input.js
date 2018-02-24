import { GET_INPUT } from 'actions/input';

const initState = {
    input: '',
}

export default function getMd(state = initState, action) {
    switch (action.type) {
        case GET_INPUT:
            return {
                input: action.arg
            }
        default:
            return state;
    }
}
