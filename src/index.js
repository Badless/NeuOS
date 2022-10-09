import { w2popup,w2alert,w2confirm,w2prompt, w2utils, w2toolbar } from 'https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js'

window.popup2 = function() {
    w2popup.open({
        title: 'Plasma Editor',
        width: 800,
        height: 500,
        text: '<textarea id="plasma-editor" style="width: 780px; height: 370px; resize: none;" autocomplete="on"></textarea>',
        actions: ['Show Message'],
        //showMax: true
    })
	    .showMessage(() => {
        showMessage('Plasma Editor Beta 2 by Badless and qubiX00')
    })
}

window.popup3 = function() {
    w2popup.open({
        title: 'Welcome',
        text: 'Welcome to NeuOS: Open Source OS runnable in your browser!'
    })
}

window.showMessage = function(text) {
    w2popup.message({
        text,
        width: 400,
        height: 180,
        hideOn: ['esc', 'click']
    });
}

new w2toolbar({
    box: '#toolbar',
    name: 'toolbar',
    items: [
		{ type: 'html',  id: 'item1',
            html(item) {
                let html =
                    '<div style="padding: 0px 10px; margin-top: -2px;">'+
                    ''+
                    '    <input size="20" placeholder="Run..." onchange="var el = w2ui.toolbar.set(\'item5\', { value: this.value });" '+
                    '         class="w2ui-input" value="'+ (item.value || '') +'"/>'+
                    '</div>';
                return html;
            }
        },
		{ type: 'break' },
        { type: 'button', id: 'item2', text: 'Welcome', icon: 'w2ui-icon-info' },
        { type: 'button', id: 'item3', text: 'Editor', icon: 'w2ui-icon-pencil' },
        { type: 'break' },
        { type: 'drop',  id: 'item4', text: 'Power', icon: 'w2ui-icon-settings',
            html: '<button onclick="self.close()">Log Off</button>'
        },
        { type: 'break' },
    ],
    onClick(event) {
		if (event.target == 'item1') {
            if (content == "plasma-editor") popup2();
        }
        if (event.target == 'item2') {
            popup3();
        }
        if (event.target == 'item3') {
            popup2();
        }
    }
})