'use strict';


const view = {
    formId: 'todoForm',
    todosContainerId: 'todoItems',
    form: null,
    controller: null,
    getForm() {
        const form = document.getElementById(this.formId);
        form ? this.form = form : null;
    },

    setEvents() {
        this.form.addEventListener(
            'submit',
            this.submitHandler.bind(this)
        )

        document.addEventListener(
            'DOMContentLoaded',
            this.prefillData.bind(this)
        )
    },

    prefillData() {
        const data = this.controller.getData(this.formId);
        const todoContainer = document.getElementById(this.todosContainerId)

        for(const item of data) {
            const template = this.createTemplate(item);
            todoContainer.prepend(template);
        }

    },

    submitHandler(event) {
        event.preventDefault();
        const data = this.findInputsData();

        this.controller.setData(
            {id:this.formId, ...data}
        );

        document.getElementById(this.todosContainerId).prepend(
            this.createTemplate(data)
        )

        event.target.reset();
    },

    findInputsData() {
        return Array.from(
            this.form
                .querySelectorAll('input[type=text], textarea')
        )
            .reduce(
                (acc, item) => {
                    acc[item.name] = item.value;
                    return acc;
                },
                {}
            );
    },

    createTemplate({title, description}) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');

        let wrapInnerContent = '<div class="taskWrapper">';
        wrapInnerContent += `<div class="taskHeading">${title}</div>`;
        wrapInnerContent += `<div class="taskDescription">${description}</div>`;
        wrapInnerContent += '</div>';

        wrapper.innerHTML = wrapInnerContent;

        return wrapper;
    },

    init(controllerInstance) {
        this.getForm();
        this.setEvents();
        this.controller = controllerInstance;
    }

}