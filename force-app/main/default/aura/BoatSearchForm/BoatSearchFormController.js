({
  doInit: function (component, event, helper) {
    var action = component.get("c.getBoatTypes");

    action.setCallback(this, function (response) {
      var state = response.getState();

      if (state === "SUCCESS") {
        component.set("v.boatTypes", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);

    var createRecordEvent = $A.get("e.force:createRecord");

    if (createRecordEvent) {
      console.log("passed check");
      component.set("v.showNewButton", true);
    } else {
      console.log("did not pass check");
    }
  },
  boatTypeChange: function (component, event, helper) {
    var boatType = event.getSource().get("v.value");

    component.set("v.boatType", boatType);
  },
  clickNew: function (component, event, helper) {
    var createRecordEvent = $A.get("e.force:createRecord");

    if (createRecordEvent) {
      var params = { entityApiName: "Boat__c" };
      var boatType = component.get("v.boatType");

      if (boatType) {
        params.defaultFieldValues = { BoatType__c: boatType };
      }

      createRecordEvent.setParams(params);
      createRecordEvent.fire();
    }
  },
  clickSearch: function (component, event, helper) {
    // let searchEvent = component.getEvent("searchClicked");
    var searchEvent = $A.get("e.c:formSubmitEvent");
    // clearEvent.fire();
    let boatType = component.get("v.boatType");
    if (!boatType) {
      boatType = "";
    } else {
      boatType = boatType.toString();
    }
    searchEvent.setParams({ boatTypeId: boatType });
    searchEvent.fire();
  }
});
