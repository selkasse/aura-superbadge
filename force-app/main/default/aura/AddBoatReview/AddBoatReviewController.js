({
  doInit: function (component, event, helper) {
    helper.onInit(component, event, helper);
  },
  onSave: function (component, event, helper) {
    component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
    component.find("service").saveRecord(
      $A.getCallback(function (saveResult) {
        if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
          var resultsToast = $A.get("e.force:showToast");

          if (resultsToast) {
            resultsToast.setParams({
              title: "Saved",
              message: "The record was saved."
            });
            resultsToast.fire();
          } else {
            alert("The record was saved");
          }

          //* fire the event
          let reviewAddedEvent = component.getEvent("boatReviewAdded");
          reviewAddedEvent.fire();
        } else if (saveResult.state === "INCOMPLETE") {
          console.log("User is offline, device doesn't support drafts.");
        } else if (saveResult.state === "ERROR") {
          console.log(
            "Problem saving record, error: " + JSON.stringify(saveResult.error)
          );
        } else {
          console.log(
            "Unknown problem, state: " +
              saveResult.state +
              ", error: " +
              JSON.stringify(saveResult.error)
          );
        }
      })
    );

    helper.onInit(component, event, helper);
  },
  onRecordUpdated: function (component, event, helper) {
    var eventParams = event.getParams();

    if (eventParams.changeType === "CHANGED") {
      // Get the fields that are changed for this record
      var changedFields = eventParams.changedFields;

      console.log("Fields that are changed: " + JSON.stringify(changedFields));
      // Record is changed so refresh the component (or other component logic)
      var resultsToast = $A.get("e.force:showToast");

      if (resultsToast) {
        resultsToast.setParams({
          title: "Saved",
          message: "The record was updated."
        });
        resultsToast.fire();
      } else {
        alert("The record was updated");
      }
    } else if (eventParams.changeType === "LOADED") {
      // Record is loaded in the cache
    } else if (eventParams.changeType === "REMOVED") {
      // Record is deleted and removed from the cache
    } else if (eventParams.changeType === "ERROR") {
      console.log("Error: " + component.get("v.error"));
    }
  }
});
