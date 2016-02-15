/**
 * @author Jose Manuel Ramírez Martínez
 */
function getPOI()
{
	var poi =
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
	return poi;
}
exports.get = getPOI;