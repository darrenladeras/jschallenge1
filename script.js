var text = document.getElementById( 'textValue' );
var submit = document.getElementById( 'submitValue' );
var getValue = document.getElementById( 'inserted-value' );

submit.addEventListener( 'submit', function(e) {
    e.preventDefault();

    var inputText = parseInt( textValue.value, 10 );

    if ( textValue.value === '' ) {
        alert('Put a Value between 1 to 200');
    }
}, false);

// var valueWrapper = document.getElementsByClassName( 'value-wrapper' );
// valueWrapper.appendChild(link);
// var link = document.createElement( 'a' );

getValue.addEventListener( 'click', function(e) {
    for ( var i = 0; i < 5; i++ ) {
        var ul = document.createElement('ul'),
            li = document.createElement('li');
    }
}, false);

