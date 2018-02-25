export const GET_FRAGMENT_REQUEST = "userInfo/GET_FRAGMENT_REQUEST"
export const GET_FRAGMENT_SUCCESS = "userInfo/GET_FRAGMENT_SUCCESS"
export const GET_FRAGMENT_FAIL = "userInfo/GET_FRAGMENT_FAIL"

export function getFragment() {
    return {
        types: [GET_FRAGMENT_REQUEST, GET_FRAGMENT_SUCCESS, GET_FRAGMENT_FAIL],
        promise: client => client.get(`http://0.0.0.0:8080/api/fragment.json`)
    }
}