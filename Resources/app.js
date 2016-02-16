var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
	titleControl: Ti.UI.createLabel({ 
    	text: L('kTabGroup1Title'), 
    	color: 'white',  
  	})
});
// create controls tab and root window
var win2 = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    titleControl: Ti.UI.createLabel({ 
    	text: L('kTabGroup2Title'), 
    	color: 'white',  
  	})
});
		
var TabGroup = require('view/components/cTabGroup');
var tabGroup = new TabGroup(win1, win2);
