({
  onBoatSelected: function (component, event, helper) {
    let boat = event.getParam("boat");
    console.log(boat.Id);
    component.set("v.id", boat.Id);
    component.find("service").reloadRecord();
  },
  onRecordUpdated: function (component, event, helper) {
    var reviews = component.find("reviews");
    if (reviews) {
      reviews.refresh();
    }
  },
  handleChange: function (component, event, helper) {
    var selected = component.get("v.tabId");
    component.find("tabs").set("v.selectedTabId", selected);
  },
  onBoatReviewAdded: function (component, event, helper) {
    component.set("v.tabId", "boatreviewtab");
    component.find("tabs").set("v.selectedTabId", "boatreviewtab");
    var reviews = component.find("reviews");
    if (reviews) {
      reviews.refresh();
    }
  }
});
