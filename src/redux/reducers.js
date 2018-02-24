import input from 'reducers/input';

export default function combineReducers(state = {}, action) {
    return {
        input: input(state.input, action)
    }
}