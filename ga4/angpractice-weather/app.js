angular.module("ngDirectives", ["ngTable"])
.controller("DirectivesController", DirectivesController)
.controller("TableController", TableController);

function DirectivesController() {
	console.log("DirectivesController ok");
}

function TableController() {
	console.log("TableController ok");
	var NgTableParams = ({}, { dataset: data});
	console.log(NgTableParams);
	var self = this;
	var data = [{name: "Moroni", age: 50} /*,*/];
	self.tableParams = new NgTableParams({}, { dataset: data});
}