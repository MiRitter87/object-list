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
		},
		
		
		/**
		 * Returns the localized text of the given attribute4.
		 */
		getLocalizedAttribute4Text : function(sAttribute4, oResourceBundle) {
			if(sAttribute4 === "small") {
				return oResourceBundle.getText("object.attribute4.small");
			} else if (sAttribute4 === "medium") {
				return oResourceBundle.getText("object.attribute4.medium");
			} else if (sAttribute4 === "large") {
				return oResourceBundle.getText("object.attribute4.large");
			} else {
				return "";
			}
		},
		
		
		/**
		 * Returns the localized text of the given attribute5.
		 */
		getLocalizedAttribute5Text : function(sAttribute5, oResourceBundle) {
			if(sAttribute5 === "small") {
				return oResourceBundle.getText("object.attribute5.small");
			} else if (sAttribute5 === "medium") {
				return oResourceBundle.getText("object.attribute5.medium");
			} else if (sAttribute5 === "large") {
				return oResourceBundle.getText("object.attribute5.large");
			} else {
				return "";
			}
		},
		
		
		/**
		 * Returns the localized text of the given attribute6.
		 */
		getLocalizedAttribute6Text : function(sAttribute6, oResourceBundle) {
			if(sAttribute6 === "horizontal") {
				return oResourceBundle.getText("object.attribute6.horizontal");
			} else if (sAttribute6 === "vertical") {
				return oResourceBundle.getText("object.attribute6.vertical");
			} else {
				return "";
			}
		}
	};
});