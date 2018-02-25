import input from 'reducers/input'
import fragment from 'reducers/fragment'

export default function combineReducers(state = {}, action) {
    return {
        input: input(state.input, action),
        fragment: fragment(state.fragment, action)
    }
}