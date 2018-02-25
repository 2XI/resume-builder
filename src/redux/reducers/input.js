import { SET_INPUT } from 'actions/input';

const initState = {
    input: '',
}

export default function setMd(state = initState, action) {
    switch (action.type) {
        case SET_INPUT:
            return {
                input: state.input + '\r\n\r\n' + action.arg
            }
        default:
            return state;
    }
}
