module.exports = function addClasses( props, options ) {

  var extend = require( 'extend' );
  var doc = require( 'document' );
  var camel2Dash = require( 'camel-2-dash' );

  var addClass = require( 'dom-add-class' );

  var opts = { negate: true };

  extend( opts, options );

  var keys = Object.keys( props );

  var classes = keys.reduce( function ( seq, key ) {
    var dashClass = camel2Dash( key );
    var detected = !!props[ key ];
    var klass = detected ? dashClass : (opts.negate ? 'no-' + dashClass : '');

    seq += ' ' + klass;

    return seq;
  }, '' );

  addClass( doc.querySelector( 'html' ), classes );

};
