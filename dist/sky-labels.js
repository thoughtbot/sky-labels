/*
 *  SkyLabels.js - v0.0.1
 *  Fun, Compact & Accessible Forms
 *  http://thoughtbot.github.io/slider
 *
 *  Made by Paul Smith
 *  Under MIT License
 */
var setupSkyLabels = function () {
  $(document).on("focus", ".field-wrapper", function() {
    var fieldWrapper = $(this);
    addOrRemoveHasTextClass(fieldWrapper);
    fieldWrapper.addClass("js-slider-focused");
  });

  $(document).on("blur", ".field-wrapper", function() {
    var fieldWrapper = $(this);
    addOrRemoveHasTextClass(fieldWrapper);
    fieldWrapper.removeClass("js-slider-focused");
  });
};

function addOrRemoveHasTextClass(fieldWrapper) {
  if ( fieldWrapperHasText(fieldWrapper) ) {
    fieldWrapper.addClass("js-slider-has-text");
  } else {
    fieldWrapper.removeClass("js-slider-has-text");
  }
}

function fieldWrapperHasText(fieldWrapper) {
  var input = findTextFieldInside(fieldWrapper);
  return $.trim(input.val()).length;
}

function findTextFieldInside(fieldWrapper) {
  var input = fieldWrapper.find("input");
  if ( !input.length ) {
    input = fieldWrapper.find("textarea");
  }
  return input;
}
