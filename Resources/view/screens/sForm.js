/**
 * @author Jose Manuel Ramírez Martínez
 */
function sForm(win, mapView)
{
	this.box = win;
	this.build = function()
	{	
	
	// Constants
		var borderStyleTF		= Ti.UI.INPUT_BORDERSTYLE_ROUNDED;
		var colorTF 	  		= '#336699';
		var kTopConstant  		= 8;
		var kLeftRightConstaint = 16;
	
	// UI Elements
		var box = Ti.UI.createView({
            layout: 'vertical'
        });
	
		var titleTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormTitleTF'),
			color: colorTF,		
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: 'Museu de Música'
		});
		box.add(titleTextField);
		
		var subtitleTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormSubtitleTF'),
			color: colorTF,	
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: 'Carrer de Padilla 145'		
		});
		box.add(subtitleTextField);
		
		var linkTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormLinkTF'),
			color: colorTF,
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: 'www.museudemusica.cat'
		});
		box.add(linkTextField);
		
		var latitudeTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormLatitudeTF'),
			color: colorTF,
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: '41.3984000'	
		});
		box.add(latitudeTextField);
		
		var longitudeTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormLongitudeTF'),
			color: colorTF,
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: '2.1862068'
		});
		box.add(longitudeTextField);
		
	// Save Button	
		var saveButton = Titanium.UI.createButton({
			title: L('kSaveFormButton')	
		});
		box.add(saveButton);
		
	// Save Button Action
		saveButton.addEventListener('click', function(e){
			var Map = require('ti.map');
			
			var annotation = Map.createAnnotation({
				title: titleTextField.value,
				subtitle: subtitleTextField.value,
				link: linkTextField.value,
				latitude: latitudeTextField.value,
				longitude: longitudeTextField.value
			});
			
			var map_data = require('data/poi').set(annotation, mapView);
		});
		
	// Reset Button
		var resetButton = Titanium.UI.createButton({
			title: L('kResetFormButton')	
		});
		box.add(resetButton);
		
	// Reset Button Action
		resetButton.addEventListener('click', function(e){
			var data = require('data/poi').reset(mapView);
		});
		
		// When the view is clicked, dismiss the keyboard 
		box.addEventListener('click', function(e){
			if(Ti.Platform.osname == 'android'){
          		if(e.source.toString() != '[object TextField]'){
               		Ti.UI.Android.hideSoftKeyboard();
          		}
	     	} else {
	          	if(e.source != '[object TiUITextField]'){
	          		// I'm not proud of this but as is the only
	          		// way to hide the keyboard in iOS
	               titleTextField.blur();
	               subtitleTextField.blur();
	               linkTextField.blur();
	               longitudeTextField.blur();
	               latitudeTextField.blur();
	          	}
	    	}
		});
		
		this.box.add(box);
	};
	this.build();
}
module.exports = sForm;