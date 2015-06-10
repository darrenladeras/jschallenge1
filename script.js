(function(window, document) {
    var text = document.getElementById( 'textValue' );
    var submit = document.getElementById( 'submitValue' );
    var valueWrapper = document.getElementById( 'value-wrapper' );
    var form = document.getElementById('form-wrapper');
    var insertedValue = document.createElement('div');


    // Displaying the inserted value
    form.addEventListener( 'submit', function(e) {
        e.preventDefault();

        // Convertion of inputed string to integer
        var inputText = parseInt( textValue.value, 10 );

        if ( text.value === '' ) {
            alert( '"NO INPUT DETECTED", Put a Value between 1 to 200' );
        }

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
    }, false);


    // Displaying the factors of the inserted Value
    insertedValue.addEventListener( 'click', function() {
        var getInsertedValue = insertedValue.innerHTML.replace(/\W/g, ' ');
        var split = getInsertedValue / 10;

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

            var factors = document.createElement('div');

            valueWrapper.appendChild(factors);
            factors.className = 'list-of-factors';

            var theta = [];

            var setup = function (item, radius) {
                for ( var i = 0; i < getFactors.length; i++ ) {
                    var listOfFactors = document.createElement('div');
                    listOfFactors.className = 'item';
                    listOfFactors.innerHTML = '$' + getFactors[i];
                    factors.appendChild(listOfFactors);

                    var x = (radius * (Math.cos(theta[i])));
                    var y = (radius * (Math.sin(theta[i])));

                    listOfFactors.style.top = ((300 / 2) - parseInt(x)) + 'px';
                    listOfFactors.style.left = ((300 / 2 ) + parseInt(y)) + 'px';
                }
            };

            var generate = function(item, radius) {
                var frags = 360 / item;
                for (var i = 0; i <= item; i++) {
                    theta.push((frags / 180) * i * Math.PI);
                }
                setup(item, radius)
            }
            generate(getFactors.length, 150);
        }
    }, false);
})(window, document);