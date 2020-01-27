const colors = require('colors');
const fs = require('fs');

class Contact {

    constructor() {

    }

    static convertJsonFileToObject() {
        try {
            let contact = fs.readFileSync('./resources/contact-1.json', 'UTF8');
            return JSON.parse(contact);
        } catch(e) {
            console.error(e .red);
            return null;
        }
    }

    static convertObjectToJsonFile() {
        let data = {
            "firstName": "Jane",
            "lastName": "Doe",
            "emailAddress": "janedoe@somewhere.com",
            "mobileNumber": "222-222-2222"
        };

        try {
            let contact = JSON.stringify(data, null, 4);
            fs.writeFileSync('./resources/contact-2.json', contact, 'UTF8');
            return true;
        } catch(e) {
            console.error(e .red);
            return false;
        }
    }

    static convertJsonFileToObjectArray() {
        try {
            let contacts = fs.readFileSync('./resources/contacts-1.json', 'UTF8');
            return JSON.parse(contacts);
        } catch(e) {
            console.error(e .red);
            return null;
        }
    }

    static convertObjectArrayToJsonFile() {
        let data = [{
            "firstName": "John",
            "lastName": "Doe",
            "emailAddress": "johndoe@somewhere.com",
            "mobileNumber": "111-111-1111"
        }, {
            "firstName": "Jane",
            "lastName": "Doe",
            "emailAddress": "janedoe@somewhere.com",
            "mobileNumber": "222-222-2222"
        }];

        try {
            let contacts = JSON.stringify(data, null, 4);
            fs.writeFileSync('./resources/contacts-2.json', contacts, 'UTF8');
            return true;
        } catch(e) {
            console.error(e .red);
            return false;
        }
    }

    static convertJsonStringToObject() {
        try {
            let contact = '{"firstName": "John", "lastName": "Doe", "emailAddress": "johndoe@somewhere.com"}';
            return JSON.parse(contact);
        } catch(e) {
            console.error(e .red);
            return null;
        }
    }

    static convertObjectToJsonString() {
        let contact = {
            "firstName": "Jane",
            "lastName": "Doe",
            "emailAddress": "janedoe@somewhere.com",
            "mobileNumber": "222-222-2222"
        };

        try {
            return JSON.stringify(contact);
        } catch(e) {
            console.error(e .red);
            return null;
        }
    }

    static convertJsonStringToObjectArray() {
        try {
            let contacts = '[{"firstName": "John", "lastName": "Doe", "emailAddress": "johndoe@somewhere.com"}'
                + ', {"firstName": "John", "lastName": "Doe", "emailAddress": "johndoe@somewhere.com"}]';
            return JSON.parse(contacts);
        } catch(e) {
            console.error(e .red);
            return null;
        }
    }

    static convertObjectArrayToJsonString() {
        let contacts = [{
            "firstName": "John",
            "lastName": "Doe",
            "emailAddress": "johndoe@somewhere.com",
            "mobileNumber": "111-111-1111"
        }, {
            "firstName": "Jane",
            "lastName": "Doe",
            "emailAddress": "janedoe@somewhere.com",
            "mobileNumber": "222-222-2222"
        }];

        try {
            return JSON.stringify(contacts);
        } catch(e) {
            console.error(e .red);
            return null;
        }
    }

}

module.exports = Contact;