/*action*/

export const SET_INPUT = "counter/SET_INPUT"

export function setMd(arg) {
    return { type: SET_INPUT, arg: arg }
}