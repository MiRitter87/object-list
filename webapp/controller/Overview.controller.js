sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("object-list.controller.Overview", {
		/**
		 * Initializes the controller.
		 */
		onInit : function () {

		},
		
		
		/**
		 * Handles the link pressed event of the name link.
		 */
		onNameLinkPressed : function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oLinkParent = oEvent.getSource().getParent();
			var oContext = oLinkParent.getBindingContext("objects");
			var oObjectData = oContext.getObject();
			var iObjectId = oObjectData.id;
			
			oRouter.navTo("detailsRoute", {"objectId" : iObjectId});
		}
	});
});