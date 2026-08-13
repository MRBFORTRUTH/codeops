let items = [];


const addForm = document.getElementById('add-form');
const nameInput = document.getElementById('name');
const listElement = document.getElementById('list');
const countElement = document.getElementById('count');

function render() {

    listElement.innerHTML = '';


    items.forEach((item) => {
        const li = document.createElement('li');
        

        if (item.done) {
            li.classList.add('done');
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = item.text;

        textSpan.addEventListener('click', () => {
            toggleItem(item.id);
        });

        const delBtn = document.createElement('button');
        delBtn.textContent = 'x';
        delBtn.className = 'del';
        
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            deleteItem(item.id);
        });


        li.appendChild(textSpan);
        li.appendChild(delBtn);

        listElement.appendChild(li);
    });


    const total = items.length;
    countElement.textContent = `${total} ${total === 1 ? 'item' : 'items'}`;
}




function addItem(text) {
    if (!text.trim()) return; 

    const newItem = {
        id: Date.now(), 
        text: text.trim(),
        done: false
    };

    items.push(newItem); 
    render();           
}


function toggleItem(id) {
    items = items.map((item) => {
        if (item.id === id) {
            return { ...item, done: !item.done };
        }
        return item;
    });

    render(); 
}


function deleteItem(id) {
    items = items.filter((item) => item.id !== id);
    render(); 
}


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addItem(nameInput.value);
    nameInput.value = ''; 
    nameInput.focus();
});

render();