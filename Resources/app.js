var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var win1 = Titanium.UI.createWindow({  
    title:L('kTabGroup1Title'),
    backgroundColor:'#fff'
});
// create controls tab and root window
var win2 = Titanium.UI.createWindow({  
    title:L('kTabGroup2Title'),
    backgroundColor:'#fff'
});
		
var TabGroup = require('view/components/cTabGroup');
var tabGroup = new TabGroup(win1, win2);
