describe( 'dtektor', function () {

  it( 'should load the provided tests', function () {
    var dtektor = mockquire( '../', {
      './lib/add-classes': function ( test ) {
        return test;
      }
    } )( { 'someTest': true, 'another-test': false } );

    expect( dtektor.someTest ).to.be.true;
    expect( dtektor.anotherTest ).to.be.false;
  } );

  it( 'should add the classes based on the whether the tests are true or false', function () {
    var dom = require( 'domquery' );

    dom( '<div id="html"></div>' ).insert( '#fixtures' );

    var $html = dom( '#html' )[ 0 ];

    mockquire( '../', {
      'document': {
        querySelector: function ( arg ) {
          if ( arg === 'html' ) {
            return $html;
          }
        }
      }
    } )( { 'someTest': true, 'another-test': false } );

    expect( $html.className ).to.equal( 'some-test no-another-test' );
  } );

} );
