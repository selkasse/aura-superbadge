({
  onBoatClick: function (component, event, helper) {
    component.set("v.selected", true);
    let boatClickEvent = component.getEvent("boatClicked");
    var selectedBoat = component.get("v.boat");
    let boatId = selectedBoat.Id;
    boatClickEvent.setParams({ boatId: boatId });
    boatClickEvent.fire();

    let boatSelectedEvent = $A.get("e.c:BoatSelected");
    boatSelectedEvent.setParams({ boat: selectedBoat });
    boatSelectedEvent.fire();

    let mapMarkedEvent = $A.get("e.c:PlotMapMarker");
    mapMarkedEvent.setParams({
      sObjectId: boatId,
      lat: selectedBoat.Geolocation__Latitude__s,
      long: selectedBoat.Geolocation__Longitude__s,
      label: selectedBoat.Name
    });
    mapMarkedEvent.fire();
  }
});
