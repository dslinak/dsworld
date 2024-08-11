let currentSection = 'История'; // Default section
let isEditMode = true; // Initial mode is edit

function updateContent(button) {
    const title = document.getElementById('content-title');
    const contentText = document.getElementById('content-text');
    currentSection = button; // Update the current section
    
    switch (button) {
        case 'Лина':
            title.textContent = 'Лина';
            break;
        case 'Записи':
            title.textContent = 'Записи';
            break;
        case 'История':
            title.textContent = 'История';
            break;
        case 'Линак':
            title.textContent = 'Линак';
            break;
        case 'Линч':
            title.textContent = 'Линч';
            break;
        default:
            title.textContent = '';
            break;
    }

    loadText(); // Load the text specific to this section when the button is clicked
}

// Function to save text in localStorage
function saveText() {
    const text = document.getElementById('content-text').value;
    localStorage.setItem(`savedText_${currentSection}`, text);
    alert('Текст сохранён!');
}

// Function to load text from localStorage
function loadText() {
    const savedText = localStorage.getItem(`savedText_${currentSection}`);
    const contentText = document.getElementById('content-text');
    if (savedText !== null) {
        contentText.value = savedText;
    } else {
        contentText.value = ''; // Clear the text area if no saved text exists
    }
}

// Function to toggle edit mode
function toggleEditMode() {
    const contentText = document.getElementById('content-text');
    isEditMode = !isEditMode; // Toggle the mode
    if (isEditMode) {
        contentText.classList.remove('read-only');
        contentText.removeAttribute('readonly');
        contentText.focus();
    } else {
        contentText.classList.add('read-only');
        contentText.setAttribute('readonly', true);
    }
}

// Load text for the default section when the page loads
window.onload = function() {
    loadText();
};
