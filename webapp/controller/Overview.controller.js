sap.ui.define([
	"./MainController",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter"
], function (MainController, Controller, Fragment, Sorter, Filter) {
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
			this.openFragmentAsPopUp(this, "object-list.view.FilterDialog");
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
		 * Handles confirmation in the filter dialog.
		 */
		onFilterDialogConfirm : function(oEvent) {
			var oTable = this.byId("objectTable");
			var	mParams = oEvent.getParameters();
			var	oBinding = oTable.getBinding("items");
			var	aFilters = [];

			mParams.filterItems.forEach(function(oItem) {
				var aSplit = oItem.getKey().split("_");
				var	sPath = aSplit[0];
				var	sOperator = aSplit[1];
				var	sValue1 = aSplit[2];
				var	sValue2 = aSplit[3];
				var	oFilter = new Filter(sPath, sOperator, sValue1, sValue2);
				
				aFilters.push(oFilter);
			});

			oBinding.filter(aFilters);
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
		},
		
		
		/**
		 * Formatter of the attribute2 text.
		 */
		attribute2TextFormatter : function(sAttribute2) {
			return MainController.getLocalizedAttribute2Text(sAttribute2, this.getOwnerComponent().getModel("i18n").getResourceBundle());
		},
		
		
		/**
		 * Formatter of the attribute3 text.
		 */
		attribute3TextFormatter : function(sAttribute3) {
			return MainController.getLocalizedAttribute3Text(sAttribute3, this.getOwnerComponent().getModel("i18n").getResourceBundle());
		},
		
		
		/**
		 * Formatter of the attribute4 text.
		 */
		attribute4TextFormatter : function(sAttribute4) {
			return MainController.getLocalizedAttribute4Text(sAttribute4, this.getOwnerComponent().getModel("i18n").getResourceBundle());
		},
		
		
		/**
		 * Formatter of the attribute5 text.
		 */
		attribute5TextFormatter : function(sAttribute5) {
			return MainController.getLocalizedAttribute5Text(sAttribute5, this.getOwnerComponent().getModel("i18n").getResourceBundle());
		},
		
		
		/**
		 * Formatter of the attribute6 text.
		 */
		attribute6TextFormatter : function(sAttribute6) {
			return MainController.getLocalizedAttribute6Text(sAttribute6, this.getOwnerComponent().getModel("i18n").getResourceBundle());
		}
	});
});