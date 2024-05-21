function displayFormData(event) {

    event.preventDefault(); 

    let formData = new FormData(event.target);
    let formDetails = "";

    for (let [key, value] of formData.entries()) {
        formDetails += `${key}: ${value}\n`;
    }

    alert(formDetails);

}

function addField() {
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('field-container');
    
    const label = document.createElement('label');
    label.innerText = 'Extra Field:';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'extraField[]';
    input.required = true;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-field');
    removeButton.onclick = function() {
        fieldContainer.remove();
    };
    
    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);
    fieldContainer.appendChild(removeButton); 

    document.getElementById('dynamicForm').insertBefore(fieldContainer, document.getElementById('submitButton'));
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addFieldButton').onclick = addField;
});