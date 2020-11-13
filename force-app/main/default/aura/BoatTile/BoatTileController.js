({
  onBoatClick: function (component, event, helper) {
    component.set("v.selected", true);
    let boatClickEvent = component.getEvent("boatClicked");
    let selectedBoat = component.get("v.boat");
    let boatId = selectedBoat.Id;
    boatClickEvent.setParams({ boatId: boatId });
    boatClickEvent.fire();
  }
});
