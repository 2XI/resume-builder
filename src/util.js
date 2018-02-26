const throttle = (fn, gapTime) => {
    let _lastTime = null
    return function () {
        let _nowTime = + new Date()
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn()
            _lastTime = _nowTime
        }
    }
}
const handleScroll = () => {
    let editor = document.getElementById('editor')
    let preview = document.getElementById('preview')
    editor.scrollTo(0, editor.scrollHeight - editor.clientHeight)
    preview.scrollTo(0, preview.scrollHeight - preview.clientHeight)
}
export default function dealScroll(){
    throttle(handleScroll,1000)()
}