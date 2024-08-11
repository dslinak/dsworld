let currentSection = 'История'; // Default section

// Замените на URL вашего веб-приложения
const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMlJ8Ou0xM-mv-JwJNVb0Fy-8K8LU-eGf0pM_YOq34dP4oW5NoZ7VBRyAmo3KTN9KTdQ/exec';

async function updateContent(button) {
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

    // Load text for the current section
    loadText();
}

// Function to save text to Google Sheets
async function saveText() {
    const text = document.getElementById('content-text').value;
    console.log('Saving text:', text);
    const response = await fetch(`${APP_SCRIPT_URL}?action=setText`, {
        method: 'POST',
        body: JSON.stringify({ section: currentSection, text }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('Текст сохранён!');
    } else {
        alert('Ошибка при сохранении текста.');
        console.error('Save text error:', response.status, response.statusText);
    }
}

// Function to load text from Google Sheets
async function loadText() {
    console.log('Loading text for section:', currentSection);
    const response = await fetch(`${APP_SCRIPT_URL}?action=getText&section=${currentSection}`);
    if (response.ok) {
        const data = await response.json();
        document.getElementById('content-text').value = data.text;
    } else {
        alert('Ошибка при загрузке текста.');
        console.error('Load text error:', response.status, response.statusText);
    }
}

// Load text for the default section when the page loads
window.onload = function() {
    loadText();
};
