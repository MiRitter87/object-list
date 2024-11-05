sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
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
    		var iObjectId = oArguments.objectId;
    		var oObjectsModel = this.getOwnerComponent().getModel("objects");
    		var oObject = this.getObjectWithId(Number(iObjectId), oObjectsModel.oData.objects);
    		var oObjectModel = new JSONModel();
    		
    		oObjectModel.setData(oObject);
    		this.getView().setModel(oObjectModel, "selectedObject");
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
		}
	});
});