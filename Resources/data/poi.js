/**
 * @author Jose Manuel Ramírez Martínez
 */
var pointsOfInterest;
var kPersistenceKey = 'POIList';

function initializePOI()
{
	// Check if there is persistence, if there the app
	// will use it, else the app will get the default values
	var POIList = Ti.App.Properties.getList(kPersistenceKey);
	if (POIList) {
		pointsOfInterest = POIList;
	} else {
		pointsOfInterest =
		[
			{	title: "La Sagrada Familia",
				subtitle: "Carrer de la Marina 266-270",
				link: "http://www.sagradafamilia.cat",
				latitude: 41.404095, 
				longitude: 2.174582
			},
			{
				title: "Zoo de Barcelona",
		    	subtitle: "Parc de la Ciutadella",
				link: "http://www.zoobarcelona.cat/",
				latitude: 41.3883324, 
				longitude: 2.1862068
			}
		];
	}
	return pointsOfInterest;
}

function getPOI()
{
	return pointsOfInterest;
}

function setPOI(annotation, mapView)
{
	var poi = {	title: annotation.title,
				subtitle: annotation.subtitle,
				link: annotation.link,
				latitude: annotation.latitude,
				longitude: annotation.longitude
	};
	mapView.addAnnotation(annotation);
	
	// Store annotations
	pointsOfInterest.push(poi);
	Ti.App.Properties.setList(kPersistenceKey, pointsOfInterest);
}

function resetPOI(mapView)
{
	var POIList = Ti.App.Properties.getList(kPersistenceKey);
	if (POIList) {
		// Remove annotations
		Ti.App.Properties.removeProperty(kPersistenceKey);
		mapView.removeAllAnnotations();
		
		// Reset default annotations
		initializePOI();
		mapView.addAnnotations(pointsOfInterest);
	}
}

exports.init = initializePOI;
exports.get = getPOI;
exports.set = setPOI;
exports.reset = resetPOI;