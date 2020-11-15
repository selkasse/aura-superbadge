({
  afterScriptsLoaded: function (component, event, helper) {
    // Var domEl = [get dom element of rating area]
    var domEl = component.find("ratingarea").getElement();
    // Var currentRating = [get value attribute of component]
    var currentRating = component.get("v.value");
    // Var readOnly = [get readonly attribute of component]
    var readOnly = component.get("v.readonly");

    var maxRating = 5;
    var callback = function (rating) {
      component.set("v.value", rating);
    };

    component.ratingObj = rating(
      domEl,
      currentRating,
      maxRating,
      callback,
      readOnly
    );
  },
  onValueChange: function (component, event, helper) {
    if (component.ratingObj) {
      var value = component.get("v.value");

      component.ratingObj.setRating(value, false);
    }
  }
});
