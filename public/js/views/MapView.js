var MapView = ContentView.extend({

  /*
   * Initialize with the template-id
   */
  initialize: function(options) {
    this.template = options.template;
    this.lat = options.lat;
    this.long = options.long;
    this.mapId = options.mapId;
    this.mapTitle = options.mapTitle;
  },

  render: function() {
    var content = $(this.template).html();
    $(this.el).html(content);
    this.initializeMap(this.lat, this.long, this.mapId, this.mapTitle);

    return this;
  },

  initializeMap: function(lat, long, id, title) {
      var latLng = new google.maps.LatLng(lat, long);
      var options = {
        center: latLng,
        zoom: 13
      };

      var map = new google.maps.Map(
        document.getElementById(id),
        options
      );

      var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: title
      });
      marker.setMap(map);
  }

});
