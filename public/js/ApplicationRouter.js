var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;

		this.ourStoryView = new ContentView({template: '#our-story'});
		this.weddingPartyView = new WeddingPartyView({template: '#wedding-party'});
		this.ceremonyView = new MapView({
			template: '#ceremony',
			lat: 43.735493,
			long: -79.742637,
			mapId: "map-ceremony",
			mapTitle: "St. Anthony of Padua Parish"
		});
		this.receptionView = new MapView({
			template: '#reception',
			lat: 43.7958784,
			long: -79.5188288,
			mapId: "map-reception",
			mapTitle: "Riviera Parque"
		});
		this.rsvpView = new RsvpView({template: '#rsvp'});
		this.accommadationsView = new ContentView({template: '#accommadations'});
		this.notFoundView = new ContentView({template: '#not-found'});
	},

	routes: {
		"": "ourStory",
		"our-story": "ourStory",
		"wedding-party": "weddingParty",
		"ceremony": "ceremony",
		"reception": "reception",
		"rsvp": "rsvp",
		"accommadations": "accommadations",
		"*else": "notFound"
	},

	currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			// Detach the old view
			this.currentView.remove();
		}

		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);

		// Render view after it is in the DOM (styles are applied)
		view.render();
		this.currentView = view;
		$('#nav-select').val(view.template);
	},

	/*
	 * Change the active element in the topbar
	 */
	setActiveEntry: function(url) {
		// Unmark all entries
		$('li').removeClass('active');

		// Mark active entry
		$("li a[href='" + url + "']").parents('li').addClass('active');
	},

	ourStory: function() {
		this.switchView(this.ourStoryView);
		this.setActiveEntry('#our-story');
	},

	weddingParty: function() {
		this.switchView(this.weddingPartyView);
		this.setActiveEntry('#wedding-party');
	},

	ceremony: function() {
		this.switchView(this.ceremonyView);
		this.setActiveEntry('#ceremony');
	},

	reception: function() {
		this.switchView(this.receptionView);
		this.setActiveEntry('#reception');
	},

	rsvp: function() {
		this.switchView(this.rsvpView);
		this.setActiveEntry('#rsvp');
	},

	accommadations: function() {
		this.switchView(this.accommadationsView);
		this.setActiveEntry('#accommadations');
	},

	notFound: function() {
		this.switchView(this.notFoundView);
	}
});
