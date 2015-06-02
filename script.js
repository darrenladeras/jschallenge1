var text = document.getElementById('textValue');
var submit = document.getElementById('submitValue');

submit.addEventListener('click', function(e) {
    e.preventDefault();

    if ( textValue.value === '' ) {
        alert ("Please enter a Value");
        return false;
    }

    if ( textValue.value == 0 ) {
        alert ("Invalid Input, Try to put a value between 1 to 200 only");
        return false;
    }

    if ( textValue.value <= 200 ) {
        var getValue = document.getElementById('inserted-value');
        getValue.appendChild(document.createTextNode('$' + textValue.value));
    }

    if ( textValue.value >= 201 ) {
        alert('Invalid Input, Try to put a value between 1 to 200 only');
        return false;
    }
}, false)