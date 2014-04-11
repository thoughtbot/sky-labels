describe("Sky Labels", function() {
  beforeEach(function() {
    var form = $("#sky-labels-form-template").html();
    $("#sky-labels-form").html(form);
  });

  describe("when an input without text is focused", function() {
    it("adds 'js-slider-focused' class to wrapper", function() {
      setupSkyLabels();

      skyLabelsInput().focus();

      expect(skyLabelsWrapper()).toHaveClass("js-slider-focused");
      expect(skyLabelsWrapper()).not.toHaveClass("js-slider-has-text");
    });
  });

  describe("when an input with text is focused", function() {
    it("adds 'js-slider-focused' and 'js-slider-has-text' classes to wrapper", function() {
      setupSkyLabels();

      skyLabelsInput().val("Something");
      skyLabelsInput().focus();

      expect(skyLabelsWrapper()).toHaveClass("js-slider-focused");
      expect(skyLabelsWrapper()).toHaveClass("js-slider-has-text");
    });
  });

  describe("when an input with text is focused then blurred", function() {
    it("removes 'js-slider-focused' class from wrapper", function() {
      setupSkyLabels();

      skyLabelsInput().focus();
      skyLabelsInput().val("Something");
      skyLabelsInput().blur();

      expect(skyLabelsWrapper()).toHaveClass("js-slider-has-text");
      expect(skyLabelsWrapper()).not.toHaveClass("js-slider-focused");
    });
  });

  describe("when an input with text was never focused", function() {
    it("adds 'js-slider-has-text' class to wrapper", function() {
      skyLabelsInput().val("Something");

      setupSkyLabels();

      expect(skyLabelsWrapper()).toHaveClass("js-slider-has-text");
      expect(skyLabelsWrapper()).not.toHaveClass("js-slider-focused");
    });
  });

  describe("when a textarea is focused with text", function() {
    it("adds 'js-slider-focused' and 'js-slider-has-text' classes to wrapper", function() {
      setupSkyLabels();

      skyLabelsTextArea().val("Something");
      skyLabelsTextArea().focus();

      expect(skyLabelsTextAreaWrapper()).toHaveClass("js-slider-focused");
      expect(skyLabelsTextAreaWrapper()).toHaveClass("js-slider-has-text");
    });
  });

  function skyLabelsInput() {
    return $("#sky-labels-form input");
  }

  function skyLabelsTextArea() {
    return $("#sky-labels-form textarea");
  }

  function skyLabelsWrapper() {
    return skyLabelsInput().parent(".field-wrapper");
  }

  function skyLabelsTextAreaWrapper() {
    return skyLabelsTextArea().parent(".field-wrapper");
  }
});
