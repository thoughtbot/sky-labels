var setupSkyLabels = function (element) {
  if (element === undefined || element === null) {
    element = document;
  }
  element = $(element);

  element.on("focus blur", ".sky-label", addOrRemoveHasTextClass);
  element.on("focus", ".sky-label", addFocusedClass);
  element.on("blur", ".sky-label", removeFocusedClass);
  element.ready(hideLabelsIfInputHasText);

  function addFocusedClass(event) {
    var fieldWrapper = $(event.currentTarget);
    fieldWrapper.addClass("sky-label-focused");
  }

  function removeFocusedClass(event) {
    var fieldWrapper = $(event.currentTarget);
    fieldWrapper.removeClass("sky-label-focused");
  }

  function hideLabelsIfInputHasText() {
    element.find(".sky-label").trigger("blur");
  }

  function addOrRemoveHasTextClass(event) {
    var fieldWrapper = $(event.currentTarget);
    if ( fieldWrapperHasText(fieldWrapper) ) {
      fieldWrapper.addClass("sky-label-has-text");
    } else {
      fieldWrapper.removeClass("sky-label-has-text");
    }
  }

  function fieldWrapperHasText(fieldWrapper) {
    var textField = fieldWrapper.find("input, textarea");
    return $.trim(textField.val()).length;
  }
};
