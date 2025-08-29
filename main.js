


document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.margin = '20px';

    const title = document.createElement('h1');
    title.textContent = 'DOM Manipulation Task';
    container.appendChild(title);
    
    const colors = ['lightgreen', 'lightblue', 'lightblue'];
    for (let i = 1; i <= 3; i++) {
        const box = document.createElement('div');
        box.textContent = `Updated Box ${i}`;
        box.style.backgroundColor = colors[i - 1];
        box.style.border = '2px solid blue';
        box.style.margin = '10px auto';
        box.style.padding = '20px';
        box.style.width = '50%';
        box.style.fontSize = '20px';
        box.style.fontWeight = 'bold';
        container.appendChild(box);
    }

    const list = document.createElement('ul');
    const items = ['Item 2', 'Item 3'];
    items.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        listItem.style.fontSize = '18px';
        listItem.style.margin = '5px 0';
        list.appendChild(listItem);
    });
    container.appendChild(list);


    document.body.appendChild(container);
});