const addBtn = document.getElementById("add");

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <img src="./image/pin.png" alt="pin"/>
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pencil"></i></button>
            <button class="delete"><i class="fa-solid fa-eraser"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea> 
    `
    const deleteBtn = note.querySelector(".delete");
    deleteBtn.addEventListener('click', () => {
        note.remove();
    })

    document.body.appendChild(note);
}
