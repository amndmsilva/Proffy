// look for the button
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// when you click the button

// perform an action
function cloneField() {
    // Duplicate the fields. What fields ??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    // clear the fields. What fields?
    const fields = newFieldContainer.querySelectorAll('input')

    // for each field, clear

    fields.forEach(function(field) {
        // take the field of the moment and clean
        field.value = ""
    });

    // Place on the page. Where?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}