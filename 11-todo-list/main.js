const submitForm = document.querySelector('.app');
const addButton = document.querySelector('.add-todo');
const addInput = document.getElementById('add-input');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); //gives a NodeList of all li's
let listLength = list.length;

const generateTemplate = (todo) => {

    const html = `  <li>
                        <div class="uk-grid uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-expand@m">
                                <label for="todo-${listLength}"><input id="todo-${listLength}" class="uk-checkbox uk-margin-small-right" type="checkbox">${todo}</label>
                            </div>

                            <div class="uk-width-auto@m">
                                <button class="uk-button uk-button-link uk-text-danger delete">
                                    <span class="uk-disabled" uk-icon="icon: trash;"></spancl>
                                </button>
                            </div>
                        </div>
                    </li>`;

    todoList.innerHTML += html;
};

function addTodos(e) {
    e.preventDefault();

    const todo = addInput.value.trim();

    if (todo.length) {
        listLength = listLength + 1;
        generateTemplate(todo);
        submitForm.reset();
    }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

function deleteTodos(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
}

todoList.addEventListener('click', deleteTodos);