var SelectorView = Backbone.View.extend({
  el: $("#nav-select"),

  initialize: function() {
    $(this.el).on('change', this.changeRoute);
  },

  changeRoute: function(e) {
    var route = $(e.currentTarget).val();
    Backbone.history.loadUrl(route);
  }
});
