var BaseModalView = Backbone.View.extend({
  className: 'modal fade hide',

  events: {
    'hidden': 'teardown'
  },

  initialize: function(options) {
    this.template = options.template;

    _(this).bindAll();
    this.render();
  },

  show: function(id, person) {
    $(this.el).attr('id', id);

    $('.modal-name', this.el).html(person.name);
    $('.modal-title', this.el).html(person.title);
    $('.modal-body', this.el).html(person.content);
    $(this.el).removeClass('hide');
    $(this.el).modal('show');
  },

  teardown: function() {
    this.$el.data('modal', null);
    this.remove();
  },

  render: function() {
    var content = $(this.template).html();
    $(this.el).html(content);
    $(this.el).modal({show: false}); // dont show modal on instantiation
    return this;
  }
});