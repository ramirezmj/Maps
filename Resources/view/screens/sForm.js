/**
 * @author Jose Manuel Ramírez Martínez
 */
function sForm(win, mapView)
{
	this.box = win;
	this.build = function()
	{	
		var box = Ti.UI.createView({
            layout: 'vertical'
        });
		
		var borderStyleTF		= Ti.UI.INPUT_BORDERSTYLE_ROUNDED;
		var colorTF 	  		= '#336699';
		var kTopConstant  		= 8;
		var kLeftRightConstaint = 16;
		
		var titleTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormTitleTF'),
			color: colorTF,		
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: 'Test'
		});
		box.add(titleTextField);
		var subtitleTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormSubtitleTF'),
			color: colorTF,	
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: 'Test'		
		});
		box.add(subtitleTextField);
		var linkTextField = Titanium.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText : L('kFormLinkTF'),
			color: colorTF,
			top: kTopConstant, left: kLeftRightConstaint,
			right: kLeftRightConstaint,
			value: 'Test'
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
		
		var saveButton = Titanium.UI.createButton({
			title: L('kSaveFormButton')	
		});
		box.add(saveButton);
		saveButton.addEventListener('click', function(e){
			var Map = require('ti.map');
			var annotation = Map.createAnnotation({
				title: titleTextField.value,
				subtitle: subtitleTextField.value,
				link: linkTextField.value,
				latitude: latitudeTextField.value,
				longitude: longitudeTextField.value,
			});
			mapView.addAnnotation(annotation);
		});
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