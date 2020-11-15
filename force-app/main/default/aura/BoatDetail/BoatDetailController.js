({
  doInit: function (component, event, helper) {
    var navigationEvent = $A.get("e.force:navigateToSObject");

    if (navigationEvent) {
      component.set("v.showButton", true);
    }
  },

  onFullDetails: function (component, event, helper) {
    console.log("inside onFullDetails");
    var navigationEvent = $A.get("e.force:navigateToSObject");
    let boat = component.get("v.boat");
    navigationEvent.setParams({
      recordId: boat.Id
    });
    navigationEvent.fire();
  }
});
