'use strict';


const model = {
    controller: null,

    getData(id) {
        return JSON.parse(
            localStorage.getItem(id)
        )
    },

    setData(data) {
        const keyInDB = data.id;
        delete data.id;

        if(!localStorage.getItem(keyInDB)) {
            localStorage.setItem(
                keyInDB,
                JSON.stringify([data])
            );
            return;
        }

        const currentData = JSON.parse(localStorage.getItem(keyInDB));
        currentData.push(data);
        localStorage.setItem(
            keyInDB,
            JSON.stringify(currentData)
        );

    },

    init(controllerInstance) {
        this.controller = controllerInstance;
    }

}