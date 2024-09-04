const cardData = {
    file_transfer: { "File Transfer 1.2j": "./src/styles/file_transfer.png" },
    xampp: { XAMPP: "./src/styles/xampp.png" },
    vscode: { "Visual Studio Code": "./src/styles/vscode.png" },
};

const content = document.querySelector('content');
content.className = 'd-flex ';

function createCard(key, title, imgSrc) {
    const label = document.createElement('label');
    label.className = 'card btn';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'cardInput';
    input.className = 'cardInput';
    input.value = key;
    input.hidden = true;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column justify-content-center';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content d-flex justify-content-center';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title;

    cardContent.appendChild(img);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title d-flex justify-content-center';
    cardTitle.textContent = title;

    cardBody.appendChild(cardContent);
    cardBody.appendChild(cardTitle);

    label.appendChild(input);
    label.appendChild(cardBody);

    content.appendChild(label);
}

for (const key in cardData) {
    const data = cardData[key];
    for (const title in data) {
        createCard(key, title, data[title]);
    }
}
