sap.ui.define([
	
], function () {
	"use strict";
	
	return {
		/**
		 * Returns the localized text of the given attribute2.
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
		
		
		/**
		 * Returns the localized text of the given attribute3.
		 */
		getLocalizedAttribute3Text : function(sAttribute3, oResourceBundle) {
			if(sAttribute3 === "micro") {
				return oResourceBundle.getText("object.attribute3.micro");
			} else if (sAttribute3 === "mini") {
				return oResourceBundle.getText("object.attribute3.mini");
			} else if (sAttribute3 === "midi") {
				return oResourceBundle.getText("object.attribute3.midi");
			} else if (sAttribute3 === "big") {
				return oResourceBundle.getText("object.attribute3.big");
			} else {
				return "";
			}
		}
	};
});