describe("Sky Labels", function() {
  beforeEach(function() {
    var form = $("#sky-labels-form-template").html();
    $("#sky-labels-form").html(form);
  });

  describe("when an input without text is focused", function() {
    it("adds 'sky-label-focused' class to wrapper", function() {
      setupSkyLabels();

      skyLabelsInput().focus();

      expect(skyLabelsWrapper()).toHaveClass("sky-label-focused");
      expect(skyLabelsWrapper()).not.toHaveClass("sky-label-has-text");
    });
  });

  describe("when an input with text is focused", function() {
    it("adds 'sky-label-focused' and 'sky-label-has-text' classes to wrapper", function() {
      setupSkyLabels();

      skyLabelsInput().val("Something");
      skyLabelsInput().focus();

      expect(skyLabelsWrapper()).toHaveClass("sky-label-focused");
      expect(skyLabelsWrapper()).toHaveClass("sky-label-has-text");
    });
  });

  describe("when an input with text is focused then blurred", function() {
    it("removes 'sky-label-focused' class from wrapper", function() {
      setupSkyLabels();

      skyLabelsInput().focus();
      skyLabelsInput().val("Something");
      skyLabelsInput().blur();

      expect(skyLabelsWrapper()).toHaveClass("sky-label-has-text");
      expect(skyLabelsWrapper()).not.toHaveClass("sky-label-focused");
    });
  });

  describe("when an input with text was never focused", function() {
    it("adds 'sky-label-has-text' class to wrapper", function() {
      skyLabelsInput().val("Something");

      setupSkyLabels();

      expect(skyLabelsWrapper()).toHaveClass("sky-label-has-text");
      expect(skyLabelsWrapper()).not.toHaveClass("sky-label-focused");
    });
  });

  describe("when a textarea is focused with text", function() {
    it("adds 'sky-label-focused' and 'sky-label-has-text' classes to wrapper", function() {
      setupSkyLabels();

      skyLabelsTextArea().val("Something");
      skyLabelsTextArea().focus();

      expect(skyLabelsTextAreaWrapper()).toHaveClass("sky-label-focused");
      expect(skyLabelsTextAreaWrapper()).toHaveClass("sky-label-has-text");
    });
  });

  function skyLabelsInput() {
    return $("#sky-labels-form input");
  }

  function skyLabelsTextArea() {
    return $("#sky-labels-form textarea");
  }

  function skyLabelsWrapper() {
    return skyLabelsInput().parent(".sky-label");
  }

  function skyLabelsTextAreaWrapper() {
    return skyLabelsTextArea().parent(".sky-label");
  }
});
