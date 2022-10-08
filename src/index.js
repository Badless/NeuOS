import { w2popup } from 'https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js'

window.popup2 = function() {
    w2popup.open({
        title: 'Plasma Editor',
        text: '<textarea style="width: 600px; height: 188px; resize: none;" autocomplete="on"></textarea>',
        actions: ['Ok', 'Cancel'],
        width: 500,
        height: 300,
        modal: true,
        showClose: true,
        showMax: true,
        onMax(evt) {
            console.log('max', evt)
        },
        onMin(evt) {
            console.log('min', evt)
        },
        onKeydown(evt) {
            console.log('keydown', evt)
        }
    })
        .then((evt) => {
            console.log('popup ready')
        })
        .close(evt => {
            console.log('popup clsoed')
        })
        .ok((evt) => {
            console.log('ok', evt)
            w2popup.close()
        })
        .cancel((evt) => {
            console.log('cancel', evt)
            w2popup.close()
        })
}