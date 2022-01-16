'use strict';


function controller(view, model) {
    return  {
        getData(dbKey) {
            if(!dbKey) throw new Error('Database key is not defined');
            return model.getData(dbKey);
        },

        setData(data) {
            if(!this.validateData(data)) throw new Error('Validation Error!');
            model.setData(data);
        },

        validateData(data) {
            if(Object.keys(data).length === 0) return false;

            for(const key in data) {
                if(!data[key].trim()) return false;
            }

            return true;
        }

    }
}
