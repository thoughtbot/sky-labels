/*
 *  SkyLabels.js - v0.0.2
 *  Fun, Compact & Accessible Forms
 *  http://thoughtbot.github.io/sky-labels
 *
 *  Made by Paul Smith
 *  Under MIT License
 */
var setupSkyLabels = function () {
  $(document).on("focus blur", ".sky-label", addOrRemoveHasTextClass);
  $(document).on("focus", ".sky-label", addFocusedClass);
  $(document).on("blur", ".sky-label", removeFocusedClass);
  $(document).ready(hideLabelsIfInputHasText);

  function addFocusedClass(event) {
    var fieldWrapper = $(event.currentTarget);
    fieldWrapper.addClass("sky-label-focused");
  }

  function removeFocusedClass(event) {
    var fieldWrapper = $(event.currentTarget);
    fieldWrapper.removeClass("sky-label-focused");
  }

  function hideLabelsIfInputHasText() {
    $(".sky-label").trigger("blur");
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
