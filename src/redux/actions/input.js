/*action*/

export const GET_INPUT = "counter/GET_INPUT"

export function getMd(arg) {
    return { type: GET_INPUT, arg: arg }
}