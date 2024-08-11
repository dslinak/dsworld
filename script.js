let currentSection = 'История'; // Default section

function updateContent(button) {
    const title = document.getElementById('content-title');
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
            title.textContent = 'История';
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
    if (savedText !== null) {
        document.getElementById('content-text').value = savedText;
        alert('Текст загружен!');
    } else {
        document.getElementById('content-text').value = ''; // Clear the text area if no saved text exists
        alert('Нет сохранённого текста.');
    }
}

// Load text for the default section when the page loads
window.onload = function() {
    loadText();
};
