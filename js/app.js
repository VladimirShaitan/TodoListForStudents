'use strict';
//
// function findParentElByClass(currentElement, parentClassName) {
//     if(currentElement === null) return null;
//
//     if(currentElement.classList.contains(parentClassName)) {
//         return currentElement
//     }
//
//     return findParentElByClass(currentElement.parentElement, parentClassName);
//
//
// }
//
// (function (){
//     let controllerInstance = controller(view, model);
//     view.init(controllerInstance);
//     model.init(controllerInstance);
// })()

const formConfiguration = {
    form: '#todoForm',
    todosContainer: '#todoItems',
    removeBtn:  '.remove-all'
}


const controller = new TodoListController(
    formConfiguration,
    TodoListView,
    TodoListModel
)