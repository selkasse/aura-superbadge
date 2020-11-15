({
  onInit: function (component, event, helper) {
    // Prepare a new record from template
    component.find("service").getNewRecord(
      "BoatReview__c", // SObject type (objectApiName)
      null, // RecordTypeId
      false, // Skip cache?
      $A.getCallback(function () {
        var rec = component.get("v.boatReview");
        var error = component.get("v.recordError");

        if (error || rec === null) {
          console.log("Error initializing record template: " + error);

          return;
        }

        rec.Boat__c = component.get("v.boat").Id;
        component.set("v.boatReview", rec);
      })
    );
  }
});
