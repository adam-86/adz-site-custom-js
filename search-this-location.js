/************ IMPORTANT ************

If theme is updated, you MUST add the geometry
library into enqueue_scripts function located at
wp-content/themes/my-listing/includes/extensions/maps/google-maps.php

EXAMPLE:
    public function enqueue_scripts() {
      // Google Maps config.
      $args = [];
      $args['key'] = $this->api_key;
      $args['libraries'] = 'places,geometry'; <--- Make it look like this.
      $args['v'] = 3;
      if ( $this->language && $this->language !== 'default' ) {
        $args['language'] = $this->language;
      }

  *************************************/

(function($) {

  $(window).on('load', function() {

    // Check if we are on the explore page
    if (typeof MyListing.Explore != "undefined") {

      var explore_map = MyListing.Explore.$data.map.map;

      // Add new idle event to the map, the evnet will prform the fuct
      google.maps.event.addListener(explore_map, 'idle', function() {

        // Get all map markers
        var explore_markers = MyListing.Explore.map.markers;

        // If there is at least one marker then generate array of visible markers
        if (explore_markers.length > 0) {

          // Explore iterator
          var i = 0;

          // Markers to hide from sidebar
          let markers_exclude = new Array();

          // Loop through all the markers
          for (i = 0; i < explore_markers.length; i++) {


/*

  Simply using 'map.getBounds()' resulted in listings showing outside of the actual viewport

  Lines 51 - 62 calculates bounds based on the center of the map, and the northeast corner
  of the viewport.

*/
            const map = explore_map;

            const bounds = map.getBounds();
            const center = map.getCenter();

            if (bounds && center) {
              const ne = bounds.getNorthEast();

              var radius = google.maps.geometry.spherical.computeDistanceBetween(center, ne);
            }

            let viewPort = map.getBounds(radius);

            // If marker is not visible in viewport then add to the markers_exclude array listing ID(marker have the same ID)
            if (!viewPort.contains(explore_markers[i].marker.getPosition())) {
              markers_exclude[i] = explore_markers[i].options.template.listing_id;
            }
          }

          // Check if the map is visible
          if ($('.finder-map').width() != 0) {
            // Reset the visibility of all elements
            $('.results-view.grid > div').addClass('grid-item');
            $('.results-view.grid .grid-item').show();

            $.each(markers_exclude, function(i, val) {
              $('[data-id="' + val + '"]').parent().hide();
              $('[data-id="' + val + '"]').parent().removeClass('grid-item');
            });

            // Restart isotope to fill all the empty spaces
            $(".grid").isotope();

          }
        }
      });
    }
  });

})(jQuery);
