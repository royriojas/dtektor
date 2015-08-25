var doc = require( 'document' );

module.exports = doc.fullscreenEnabled ||
  doc.webkitFullscreenEnabled ||
  doc.mozFullScreenEnabled ||
  doc.msFullscreenEnabled;
