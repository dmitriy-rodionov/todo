const input = document.querySelector('.todo__input'),
      taskList = document.querySelector('.todo__task-list'),
      addBtn = document.querySelector('.todo__add-btn');


addBtn.addEventListener('click', addTask);      


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
            <input type="checkbox">
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