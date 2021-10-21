const input = document.querySelector('.todo__input'),
      taskList = document.querySelector('.todo__task-list'),
      addBtn = document.querySelector('.todo__add-btn'),
      saveBtn = document.querySelector('.todo__save'),
      clearBtn = document.querySelector('.todo__clear');


addBtn.addEventListener('click', addTask);
saveBtn.addEventListener('click', saveValues);
clearBtn.addEventListener('click', clearAll);    

if(localStorage.length != 0) {
    for(let i = 0; i < localStorage.length; i++) {
        let k = JSON.parse(localStorage.getItem(i));
        taskList.insertAdjacentHTML('beforeend', `
        <div class="todo__task">
            <input type="checkbox" class="checkbox">
            <label>${k.value}</label>
            <img src="img/icons8.svg" alt="clear" class="clear">
        </div>
    `);
        if(k.done == true) {
            let checkboxes = document.querySelectorAll('.checkbox');
            checkboxes.forEach((item, r) => {
                if(r === i) {
                    item.checked = true;
                }
            });
        }
    }
}

const closeBtns = document.querySelectorAll('.clear');
    if(closeBtns.length != 0) {
        close();
    }

function close() {
    const tasks = document.querySelectorAll('.todo__task'),
          closeBtns = document.querySelectorAll('.clear');
    closeBtns.forEach((item, i) => {
        item.addEventListener('click', () => {
            tasks[i].remove();
        })
    });
}

function addTask() {
    if(input.value != '') {
        taskList.insertAdjacentHTML('beforeend', `
        <div class="todo__task">
            <input type="checkbox" class="checkbox">
            <label>${input.value}</label>
            <img src="img/icons8.svg" alt="clear" class="clear">
        </div>
    `);
    input.value = '';
    close();
    }else {
        input.value = '';
    }
}

function saveValues() {
    localStorage.clear();
    const tasks = document.querySelectorAll('.todo__task');
    tasks.forEach((item, i) => {
        let task = {};
        if(item.firstElementChild.checked) {
            task.done = true;
        } else {
            task.done = false;
        }
        task.value = item.firstElementChild.nextElementSibling.textContent;
        localStorage.setItem(i, JSON.stringify(task));
    });
}

function clearAll() {
    const tasks = document.querySelectorAll('.todo__task');
    tasks.forEach((item) => {
        item.remove();
    });
    localStorage.clear();
}