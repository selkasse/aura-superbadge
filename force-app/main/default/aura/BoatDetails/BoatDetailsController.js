({
  onBoatSelected: function (component, event, helper) {
    console.log("inside onBoatSelected in BoatDetailsController");
    let boat = event.getParam("boat");
    console.log(boat.Id);
    component.set("v.id", boat.Id);
    component.find("service").reloadRecord();
  },
  onRecordUpdated: function (component, event, helper) {
    console.log("inside onRecordUpdated");
  }
});
