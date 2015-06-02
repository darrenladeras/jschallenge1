( function() {
    var d = document,
        b = document.body;

    // Create Elements
    // var div = document.createElement('box'),
    //     div2 = document.createElement('inner-content-box')
    //     div3 = document.createElement('form-wrapper');

    // Append Child
    // body.appendChild(div)

    var getValue = function () {
        var text = document.getElementById('textValue');
        var submit = document.getElementById('submitValue');

        if ( textValue.value === '' ) {
            alert ("Please enter a Value");
            return false;
        }

        if ( textValue.value < 201 ) {
            alert (textValue.value);
            return false;
        }
    }
} )