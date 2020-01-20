const Utils = require('./utils');

class Contact {

    constructor(data) {
        let o = {};
        if (Utils.isObject(data)) {
            o = data;
        } else if (Utils.isString(data)) {
            o = JSON.parse(data);
        }
        Object.assign(this, o);
    }
    
}

module.exports = Contact;