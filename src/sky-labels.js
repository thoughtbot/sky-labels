var setupSkyLabels = function () {
  $(document).on("focus blur", ".field-wrapper", addOrRemoveHasTextClass);
  $(document).on("focus", ".field-wrapper", addFocusedClass);
  $(document).on("blur", ".field-wrapper", removeFocusedClass);
  $(document).ready(hideLabelsIfInputHasText);

  function addFocusedClass(event) {
    var fieldWrapper = $(event.currentTarget);
    fieldWrapper.addClass("js-slider-focused");
  }

  function removeFocusedClass(event) {
    var fieldWrapper = $(event.currentTarget);
    fieldWrapper.removeClass("js-slider-focused");
  }

  function hideLabelsIfInputHasText() {
    $(".field-wrapper").trigger("blur");
  }

  function addOrRemoveHasTextClass(event) {
    var fieldWrapper = $(event.currentTarget);
    if ( fieldWrapperHasText(fieldWrapper) ) {
      fieldWrapper.addClass("js-slider-has-text");
    } else {
      fieldWrapper.removeClass("js-slider-has-text");
    }
  }

  function fieldWrapperHasText(fieldWrapper) {
    var textField = fieldWrapper.find("input, textarea");
    return $.trim(textField.val()).length;
  }
};
