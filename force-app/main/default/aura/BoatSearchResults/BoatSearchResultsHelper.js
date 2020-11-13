({
  onSearch: function (component, event) {
    let boatType = event.getParam("boatTypeId");

    var action = component.get("c.getBoats");

    action.setParams({ boatTypeId: boatType });

    action.setCallback(this, function (response) {
      var state = response.getState();

      if (state === "SUCCESS") {
        if (response.getReturnValue().length === 0) {
          component.set("v.noBoatsFound", true);
        }
        component.set("v.boats", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  }
});
