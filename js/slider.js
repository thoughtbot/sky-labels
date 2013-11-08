$('body').on('focus', '.field-wrapper', function() {
  var fieldWrapper = $(this);
  var input = fieldWrapper.find('input').first();
  if ( !fieldWrapperHasText(fieldWrapper) ) {
    fieldWrapper.removeClass('js-slider-has-text');
  };
  fieldWrapper.addClass('js-slider-focused');
});

$('body').on('blur', '.field-wrapper', function() {
  var fieldWrapper = $(this);
  if ( fieldWrapperHasText(fieldWrapper) ) {
    fieldWrapper.addClass('js-slider-has-text');
  } else {
    fieldWrapper.removeClass('js-slider-has-text');
  };
  fieldWrapper.removeClass('js-slider-focused');
});

function fieldWrapperHasText(fieldWrapper) {
  var input = inputOrTextAreaInside(fieldWrapper);
  return $.trim(input.val()).length
}

function inputOrTextAreaInside(fieldWrapper) {
  var input = fieldWrapper.find('input');
  if ( !input.length ) {
    input = fieldWrapper.find('textarea')
  }
  return input;
}
