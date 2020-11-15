({
  doInit: function (component, event, helper) {
    console.log("in boatReviews doInit");
    helper.onInit(component, event, helper);
  },
  onUserInfoClick: function (component, event, helper) {
    var userId = event.target.getAttribute("data-userid");
    var navigationEvent = $A.get("e.force:navigateToSObject");

    navigationEvent.setParams({
      recordId: userId
    });
    navigationEvent.fire();
  }
});
