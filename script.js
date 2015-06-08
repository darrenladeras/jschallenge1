(function(window, document) {
    var text = document.getElementById( 'textValue' );
    var submit = document.getElementById( 'submitValue' );
    var valueWrapper = document.getElementById( 'value-wrapper' );
    var form = document.getElementById('form-wrapper');
    var insertedValue = document.createElement('div');


    // Submit Value
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


    // Displaying the factors of the inserted Value
    insertedValue.addEventListener( 'click', function() {
        var getInsertedValue = insertedValue.innerHTML.replace(/\W/g, ' ');
        var split = getInsertedValue / 10;

        // console.log(insertedValue.innerHTML);
        // console.log(getInsertedValue);
        // console.log(generatedValue);

        if ( split < 2 ) {
            // alert('There\'s NOTHING to do to make a Factorization if you\'re skip counting by' + ' ' + getInsertedValue);
        } else {
            // alert('The inserted Value is' + '' + getInsertedValue + ' ' + 'and it can be divided into' + ' ' + split + '.');

            // Generated Value (incremented by 10)
            var list = document.getElementById('list-of-factors');

            var getFactors = [];

            for ( var i = 10; i < 200 + 10; i+=10 ) {
                getFactors.push(i)
            }

            getFactors.length = split;
            console.log(getFactors);

            var listOfFactors = document.createElement('ul');
            var factors = document.createElement('div');
            // var li = document.createElement('li');
            listOfFactors.id = 'list-of-factors';

            factors.appendChild(listOfFactors);
            valueWrapper.appendChild(factors);
            factors.className = 'factors';

            for ( var i = 0; i < getFactors.length; i++ ) {
                var li = document.createElement('li');
                li.innerHTML = getFactors[i];
                listOfFactors.appendChild(li);
            }
        }
    }, false);
})(window, document);