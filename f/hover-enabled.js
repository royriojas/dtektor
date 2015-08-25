function check() {
  var env = require( 'browser-detector/lib/parsed-ua' );
  var compare = require( '../lib/str-compare' );

  var androidOriOS = compare( env.os.name, 'ios' ) || compare( env.os.name, 'android' );

  return !androidOriOS;
}

module.exports = check();
