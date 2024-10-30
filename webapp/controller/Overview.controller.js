sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("object-list.controller.Overview", {
		/**
		 * Initializes the controller.
		 */
		onInit : function () {
			var oModel = new JSONModel();
			
			oModel.loadData("resources/objects.json");
			this.getView().setModel(oModel, "objects");
		}
	});
});