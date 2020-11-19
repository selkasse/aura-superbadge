({
  onPlotMapMarker: function (component, event, helper) {
    component.set("v.zoomLevel", 10);
    console.log(event.getParam("lat"));
    console.log(event.getParam("long"));
    console.log(event.getParam("label"));
    console.log(event.getParam("sObjectId"));
    component.set("v.mapMarkers", [
      {
        location: {
          Latitude: event.getParam("lat"),
          Longitude: event.getParam("long")
        },

        title: event.getParam("label")
      }
    ]);
    component.set("v.markersTitle", event.getParam("label"));
    component.set("v.location", {
      Latitude: event.getParam("lat"),
      Longitude: event.getParam("long")
    });
  }
});
