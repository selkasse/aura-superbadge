({
  doInit: function (component, event, helper) {
    var action = component.get("c.getBoats");

    action.setCallback(this, function (response) {
      var state = response.getState();

      if (state === "SUCCESS") {
        component.set("v.boats", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  }
});