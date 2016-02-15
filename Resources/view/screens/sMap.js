/**
 * @author Jose Manuel Ramírez Martínez
 */
function sMap(win)
{
	this.box = win;
	this.mapView = null;
	this.build = function()
	{
		var map_data = require('data/poi').get();  
		var Map = require('ti.map');
		var mapView = Map.createView({
			mapType: Map.NORMAL_TYPE,
			region: {
    			latitude: 41.392006, longitude: 2.174209,
        		latitudeDelta: 0.1, longitudeDelta: 0.1 
    		},
    		animate: true,
    		regionFit: true,
    		userLocation: false,
    		annotations: map_data
		});
		mapView.addEventListener('click', function (e) {
			Ti.API.info("Annotation " + e.title + " clicked");
		});
		this.mapView = mapView;
		this.box.add(mapView);
	};
	this.build();
}
module.exports = sMap;