sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter"
], function (Controller, Fragment, Sorter) {
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
		},
		
		
		/**
		 * Handles pressing of the sort button.
		 */
		onSortButtonPressed : function() {
			this.openFragmentAsPopUp(this, "object-list.view.SortDialog");
		},
		
		
		/**
		 * Handles pressing of the filter button.
		 */
		onFilterButtonPressed : function() {
			
		},
		
		
		/**
		 * Handles confirmation in the sort dialog.
		 */
		onSortDialogConfirm : function(oEvent) {
			var oTable = this.byId("objectTable");
			var	mParams = oEvent.getParameters();
			var	oBinding = oTable.getBinding("items");
			var	sPath;
			var	bDescending;
			var	aSorters = [];

			sPath = mParams.sortItem.getKey();
			bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));

			// apply the selected sort settings
			oBinding.sort(aSorters);
		},
		
		
		/**
		 * Opens the fragment with the given name as PopUp.
		 */
		openFragmentAsPopUp : function (oController, sName, callbackFunction) {
			var oView = oController.getView();
			var oDialogOfMap;
			
			if (!oController.oDialogMap) {				
				oController.oDialogMap = new Map();
			}
				
			oDialogOfMap = oController.oDialogMap.get(sName);
			
			if (oDialogOfMap === undefined) {
				oDialogOfMap = Fragment.load({
					id: oView.getId(),
					name: sName,
					controller: oController
				}).then(function (oDialog) {
					//connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
				
				oController.oDialogMap.set(sName, oDialogOfMap);				
			}
			
			oDialogOfMap.then(function(oDialog) {
				oDialog.open();
				
				//This callback function is executed optionally, after the Fragment has been fully initialized and opened.
				if (callbackFunction !== undefined) {					
					callbackFunction(oController);
				}
			});
		}
	});
});