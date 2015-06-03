var text = document.getElementById( 'textValue' );
var submit = document.getElementById( 'submitValue' );
var getValue = document.getElementById( 'inserted-value' );

submit.addEventListener( 'click', function(darren) {
    darren.preventDefault();

    // Convertion of inputed string to integer
    var inputText = parseInt( textValue.value, 10 );

    if ( textValue.value === '' ) {
        alert( '"NO INPUT DETECTED", Put a Value between 1 to 200' );
    }

    if ( inputText <= 0 ) {
        alert( 'The Min Value is 1' );
    }

    if ( textValue.value > 0 && textValue.value <= 200 ) {
        var getValue = document.getElementById( 'inserted-value' );
        console.log(getValue);
        getValue.innerHTML = '$' + textValue.value;
    }

    if ( textValue.value >= 201 ) {
        alert( 'The Max Value is 200' );
    }
}, false);

var valueWrapper = document.getElementById( 'value-wrapper' );
var factors = valueWrapper.children[1];
console.log(factors);
var myArray = [10, 20, 30, 40, 50];

// valueWrapper.appendChild(link);
// var link = document.createElement( 'a' );
var ul = document.createElement('ul');

getValue.addEventListener( 'click', function(e) {
    for ( var i = 0; i < myArray.length; i++ ) {
        li = document.createElement('li');
        a = document.createElement('a');
        e.preventDefault();
        a.innerHTML = myArray[i];
        li.appendChild(a);
        ul.appendChild(li);
        factors.appendChild(ul);

        console.log(myArray[i]);
    }
}, false);