sap.ui.define([
	"./MainController",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Image"
], function (MainController, Controller, JSONModel, Image) {
	"use strict";

	return Controller.extend("object-list.controller.Details", {
		/**
		 * Initializes the controller.
		 */
		onInit : function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.getRoute("detailsRoute").attachMatched(this.onRouteMatched, this);
		},
		
		
		/**
		 * Handles additional tasks to be performed when the user navigates to this view.
		 */
		onRouteMatched : function (oEvent) {
			var oArguments = oEvent.getParameter("arguments");
    		var sObjectId = oArguments.objectId;
    		var oObjectsModel = this.getOwnerComponent().getModel("objects");
    		var oObject = this.getObjectWithId(Number(sObjectId), oObjectsModel.oData.objects);
    		var oObjectModel = new JSONModel();
    		
    		oObjectModel.setData(oObject);
    		this.getView().setModel(oObjectModel, "selectedObject");
    		
    		this.setImageSource(sObjectId);
    		this.initializeCarouselWithImages(oObject);
		},
		
		
		/**
		 * Gets the Object with the given ID.
		 */
		getObjectWithId : function (iObjectId, aObjects) {
			for (var i = 0; i < aObjects.length; i++) {
    			var oTempObject = aObjects[i];
    			
				if (oTempObject.id === iObjectId) {
					return oTempObject;
				}
			}
		},
		
		
		/**
		 * Sets the source path of the object image.
		 */
		setImageSource : function (sObjectId) {
			var oObjectImage = this.getView().byId("objectImage");
			var sSourcePath = "resources/" + sObjectId + "/main.png";
			
			oObjectImage.setSrc(sSourcePath);
		},
		
		
		/**
		 * Initializes the carousel with all images of the given object.
		 */
		initializeCarouselWithImages : function (oObject) {
			var oCarousel = this.getView().byId("objectGalleryCarousel");
			var sImagePath = "";
			
			oCarousel.removeAllPages();
			
			for (var i = 0; i < oObject.images.length; i++) {
				var oImage = new Image();
				
				sImagePath = "resources/" + oObject.id + "/" + oObject.images[i];
				oImage.setSrc(sImagePath);
				oCarousel.addPage(oImage);
			}
		},
		
		
		/**
		 * Formatter of the attribute2 text.
		 */
		attribute2TextFormatter : function(sAttribute2) {
			return MainController.getLocalizedAttribute2Text(sAttribute2, this.getOwnerComponent().getModel("i18n").getResourceBundle());
		}
	});
});