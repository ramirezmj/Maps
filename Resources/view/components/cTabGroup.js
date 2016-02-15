/**
 * @author Jose Manuel Ramírez Martínez
 */
function cTabGroup(w1, w2)
{
	this.win1 = w1;
	this.win2 = w2;
	
	this.build = function () {
		// create tab group
		var tabGroup = Titanium.UI.createTabGroup();
		
		var tab1 = Titanium.UI.createTab({  
		    icon:'KS_nav_views.png',
		    title:L('kTab1Label'),
		    window:this.win1
		});
		
		var tab2 = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:L('kTab2Label'),
		    window:this.win2
		});
	
		// Content
		var Map = require('view/screens/sMap');
		var map = new Map(this.win1);
		
		var Form = require('view/screens/sForm');
		var form = new Form(this.win2, map.mapView);
		
		//  add tabs
		tabGroup.addTab(tab1);  
		tabGroup.addTab(tab2);
		tabGroup.open();  
	};
	this.build();
}
module.exports = cTabGroup;
