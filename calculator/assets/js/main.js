// Get the elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorsSelect = document.getElementById('operators');
const calculateButton = document.getElementById('calculateBtn');
const resultBox = document.getElementById('resultBox');


// for clearing the result box
const emptyResultBox = () => {
    resultBox.innerHTML = '';
    resultBox.classList = ''
}

// for appending the result box
const appendResultBox = () => {
    resultBox.textContent = 'No result yet!';
    resultBox.classList = 'border rounded p-1 shadow'
}


// for alert
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')


    emptyResultBox();
    resultBox.append(wrapper)

    // hiding the alert after 2 seconds
    setTimeout(() => {
        appendResultBox();
        wrapper.remove();
    }, 2000);
}


// Listen for the click event on the calculate button
calculateButton.addEventListener('click', () => {
    // Get the values from the inputs
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // checkpoint for invalid input
    if (isNaN(num1) || isNaN(num2)) {
        appendAlert('Invalid input', 'warning');
        return;
    }

    const operators = operatorsSelect.value;

    // checkpoint for division by 0
    if (operators === 'division' && num2 === 0) {
        appendAlert('This Cant be Deviced By 0', 'warning');
        return;
    }

    // calculation based on the selected operator and display the result
    let result;
    switch (operators) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            result = num1 / num2;
            break;
        default:
            appendAlert('Unknown operator', 'warning');
    }

    // Display result
    resultBox.textContent = `Result: ${result}`;
});

