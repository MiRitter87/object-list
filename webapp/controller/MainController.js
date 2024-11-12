sap.ui.define([
	
], function () {
	"use strict";
	
	return {
		/**
		 * Returns the localized text of the given type.
		 */
		getLocalizedAttribute2Text : function(sAttribute2, oResourceBundle) {
			if(sAttribute2 === "black") {
				return oResourceBundle.getText("object.attribute2.black");
			} else if (sAttribute2 === "brown") {
				return oResourceBundle.getText("object.attribute2.brown");
			} else if (sAttribute2 === "diverse") {
				return oResourceBundle.getText("object.attribute2.diverse");
			} else if (sAttribute2 === "red") {
				return oResourceBundle.getText("object.attribute2.red");
			} else if (sAttribute2 === "yellow") {
				return oResourceBundle.getText("object.attribute2.yellow");
			} else {
				return "";
			}
		},
	};
});