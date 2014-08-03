var mongoose = require('mongoose');
var Guest = mongoose.model('Guest');

exports.list = function(req, res) {
  // Find completed
  Guest.find({ completed: true }, null, {sort: {code: 1, attending_reception: -1, attending_ceremony: -1 }}, function(err, completedguests) {
    // Find uncompleted
    Guest.find({ completed: false }, null, {sort: {code: 1}}, function(err, uncompletedguests) {
      var reception_guests = [];
      var ceremony_guests = [];
      completedguests.forEach(function(guest) {
        if (guest.attending_reception) {
          reception_guests.push(guest);
        }

        if (guest.attending_ceremony) {
          ceremony_guests.push(guest);
        }

      });
      res.render('guests', {
        receptionguests: reception_guests,
        ceremonyguests: ceremony_guests,
        completedguests: completedguests,
        uncompletedguests: uncompletedguests
      });
    });
  });
};

exports.get = function(req, res) {
  Guest.findById(req.params.id, function(err, guest) {
    if (err) {
      res.render('not-found');
      return;
    }

    res.render('guest', {
      guest: guest
    });
  });
}

exports.create = function(req, res) {
  var guest = new Guest({
    name: req.body.name,
    code: req.body.code,
    attending_ceremony: req.body.ceremony === "true" ? true : false,
    attending_reception: req.body.reception === "true" ? true : false,
    completed: req.body.completed === "true" ? true : false,
    dietary_restriction: req.body.dietary
  });
  guest.save();
  res.redirect('/guest/' + guest.id);
}

exports.createForm = function(req, res) {
    res.render('create-guest');
}

exports.update = function(req, res) {
  Guest.findById(req.params.id, function(err, guest) {
    if (err) {
      res.render('not-found');
      return;
    }

    guest.name = req.body.name;
    guest.code = req.body.code;
    guest.attending_ceremony = req.body.ceremony === "true" ? true : false;
    guest.attending_reception = req.body.reception === "true" ? true : false;
    guest.completed = req.body.completed === "true" ? true : false;
    guest.dietary_restriction = req.body.dietary;
    guest.save();

    res.redirect('/guest/' + req.params.id);
  });
}

exports.index = function(req, res) {
  res.render('rsvp-search', {
    value: "",
    message: "Your RSVP code can be found along with your invitation. Enter it below to find your RSVP information.",
    success: true
  });
}

exports.search = function(req, res) {
  if (!req.body.code) {
    res.render('rsvp-search', {
      value: "",
      message: "Don't forget to type in your code!",
      success: false
    });
    return;
  }

  Guest.find({code: req.body.code}, null, {sort: {name: 1}}, function(err, guests) {
    if (!guests || !guests.length) {
      res.render('rsvp-search', {
        value: req.body.code,
        message: "Couldn't find your code, are you sure you typed it in correctly?",
        success: false
      });
      return;
    }

    guests.forEach(function(guest) {
      if (guest.completed) {
        res.render('rsvp-list-completed', {guests: guests, completed: false});
      } else {
        res.render('rsvp-list', {guests: guests});
      }
      return false;
    });
  });
};

exports.rsvp = function(req, res) {
  var numGuests = req.body.guests.length;
  var numProcessed = 0;

  req.body.guests.forEach(function(guest) {
    numProcessed++;

    var data = {
      attending_ceremony: guest.ceremony === 'true' ? true : false,
      attending_reception: guest.reception === 'true' ? true : false,
      dietary_restriction: guest.dietary,
      completed: true,
      updated_at: Date.now()
    };

    Guest.findOneAndUpdate(
      { _id : guest.id },
      data,
      {},
      function(error, updatedGuest) {
        console.log('saved', updatedGuest.name, updatedGuest.updated_at);
        if (numProcessed === numGuests) {
          Guest.find({code: updatedGuest.code}, null, {sort: {name: 1}}, function(err, guests) {
            res.render('rsvp-list-completed', {guests: guests, completed: true});
          });
        }
      }
    );
  });
};











