var RsvpView = ContentView.extend({
  events: {
    'click #search': 'findCode',
    'click #rsvp-submit': 'submitRsvp',
    'change input[type=radio]': 'clearErrorMessage'
  },

  findCode: function(e) {
    e.preventDefault();
    var self = this;
    var code = this.$("#code").val();

    $.ajax({
      url: '/guest',
      type: 'POST',
      data: {
        code: code
      },
      dataType: 'html'
    }).done(function(data) {
      $.cookie('rsvp_code', code);
      self.renderAndRebind(data);
    });
  },

  submitRsvp: function(e) {
    var guests = [];
    var hasErrors = false;
    var self = this;

    var ids = $('input[name=guest-id]');
    $.each(ids, function(index, id) {
      id = $(id).val();

      var attendingCeremony = self.getCheckedRadioValue(id, 'ceremony');
      if (attendingCeremony === null) {
        self.showErrorMessage(id, 'ceremony');
        hasErrors = true;
      }

      var attendingReception = self.getCheckedRadioValue(id, 'reception');
      if (attendingReception === null) {
        self.showErrorMessage(id, 'reception');
        hasErrors = true;
      }

      guests.push({
        id: id,
        ceremony: attendingCeremony,
        reception: attendingReception,
        dietary: self.getDietaryValue(id)
      });
    });

    if (!hasErrors) {
      $.ajax({
        url: '/rsvp',
        type: 'POST',
        dataType: 'html',
        data: {guests: guests}
      }).done(function(data) {
        self.renderAndRebind(data);
      });
    }

    e.preventDefault();
  },

  showErrorMessage: function(id, section) {
    var selector = "#" + section + "-error-" + id;
    $(selector).tooltip('show');
  },

  clearErrorMessage: function(e) {
    var selector = $(e.target).attr('name');
    selector = selector.replace("attendance", "error");
    $("#" + selector).tooltip('hide');
  },

  getDietaryValue: function(id) {
    var name = "dietary-" + id;
    return $('input[name=' + name + ']').val();
  },

  getCheckedRadioValue: function(id, name) {
    var name = name + "-attendance-" + id;
    var value = $('input[name=' + name + ']:checked').val();
    if (value === "yes") {
      return true;
    } else if (value === "no") {
      return false;
    }

    return null;
  },

  render: function(html) {
    var self = this;
    var code = $.cookie('rsvp_code');

    if (code) {
      $.ajax({
        url: '/guest',
        type: 'POST',
        data: {
          code: code
        },
        dataType: 'html'
      }).done(function(data) {
        self.renderAndRebind(data);
      });
    } else {
      $.ajax({
        url: '/guest',
        type: 'GET',
        dataType: 'html'
      }).done(function(data) {
        self.renderAndRebind(data);
        $('#code').focus();
      });
    }
  },

  renderAndRebind: function(html) {
    $(this.el).html(html);
    this.delegateEvents(this.events);
  }

});
