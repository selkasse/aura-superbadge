({
  onFormSubmit: function (component, event, helper) {
    let formData = event.getParam("formData");
    // let boatTypeId = formData.boatTypeId;
    let searchResultsComponent = component.find("searchResults");
    if (searchResultsComponent) {
      searchResultsComponent.search(formData.boatTypeId);
    }
  }
});
