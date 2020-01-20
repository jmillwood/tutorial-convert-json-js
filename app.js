const colors = require('colors');
const ContactManager = require('./lib/contactManager');
const Utils = require('./lib/utils')

let contact = null;

contact = ContactManager.convertJsonFileToObject();
if (Utils.isObject(contact)) {
    console.log("Successfully converted JSON file to an object" .green);
} else {
    console.log("Failed to convert JSON file to an object" .red);
}