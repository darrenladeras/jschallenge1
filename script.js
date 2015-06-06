(function(window, document) {
    var text = document.getElementById( 'textValue' );
    var submit = document.getElementById( 'submitValue' );
    var valueWrapper = document.getElementById( 'value-wrapper' );
    var form = document.getElementById('form-wrapper');
    var insertedValue = document.createElement('div');
    // console.log(form.children[1]);

    form.addEventListener( 'submit', function(e) {
        e.preventDefault();
        console.log(e.type);

        // Convertion of inputed string to integer
        var inputText = parseInt( textValue.value, 10 );

        if ( inputText <= 0 ) {
            alert( 'The Min Value is 1' );
        }

        if ( textValue.value > 0 && textValue.value <= 200 ) {
            valueWrapper.appendChild(insertedValue);
            insertedValue.className = 'inserted-value';
            insertedValue.innerHTML = '$' + textValue.value;
        }

        if ( textValue.value >= 201 ) {
            alert( 'The Max Value is 200' );
        }

        if ( text.value === '' ) {
            alert( '"NO INPUT DETECTED", Put a Value between 1 to 200' );
        }
    }, false);

    var ul = document.createElement('ul');
    var factors = document.createElement('div');
    ul.id = 'list-of-factors';

    valueWrapper.appendChild(factors);
    factors.className = 'factors';

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

    var factorization = function (value, factor) {
        return value - factor;
    };

    console.log(factorization(190, 10));

    insertedValue.addEventListener( 'click', function() {
        var list = document.getElementById('list-of-factors');

        var getFactors = [];

        for ( var i = 10; i < 200 + 10; i+=10 ) {
            li = document.createElement('li');
            getFactors.push(i)
            li.innerHTML = '$' + i;;
            ul.appendChild(li);
            factors.appendChild(ul);
        }

        console.log(getFactors);
    }, false);
})(window, document);