const fs = require('fs');
const Contact = require('./contact');

class ContactManager {

    constructor() {

    }

    static convertJsonFileToObject() {
        let data = fs.readFileSync('./resources/contact-1.json', 'UTF8');
        return new Contact(data);
    }

}

module.exports = ContactManager;