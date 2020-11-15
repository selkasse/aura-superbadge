({
  onInit: function (component, event, helper) {
    let boat = component.get("v.boat");
    let action = component.get("c.getAll");
    action.setParams({ boatId: boat.Id });
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.boatReviews", response.getReturnValue());
        if (response.getReturnValue().length === 0) {
          component.set("v.noReviewsFound", true);
        }
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  }
});
