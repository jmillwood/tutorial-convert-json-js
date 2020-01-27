const _ = require('lodash');
const colors = require('colors');
const Contact = require('./lib/contact');

let contact = null;
let contacts = null;

console.log('');
console.log('Begin processing ...' .cyan);
console.log('');

contact = Contact.convertJsonFileToObject();
if (_.isObject(contact)) {
    console.log('Successfully converted a JSON file to an object' .green);
} else {
    console.log('Failed to convert a JSON file to an object' .red);
}

console.log('');

if (Contact.convertObjectToJsonFile()) {
    console.log('Successfully converted an object to a JSON file' .green);
} else {
    console.log('Failed to convert an object to a JSON file' .red);
}

console.log('');

contacts = Contact.convertJsonFileToObjectArray();
if (_.isArray(contacts)) {
    console.log('Successfully converted a JSON file to an object array' .green);
} else {
    console.log('Failed to convert a JSON file to an object array' .red);
}

console.log('');

if (Contact.convertObjectArrayToJsonFile()) {
    console.log('Successfully converted an object array to a JSON file' .green);
} else {
    console.log('Failed to convert an object array to a JSON file' .red);
}

console.log('');

contact = Contact.convertJsonStringToObject();
if (_.isObject(contact)) {
    console.log('Successfully converted a JSON string to an object' .green);
} else {
    console.log('Failed to convert a JSON string to an object' .red);
}

console.log('');

contact = Contact.convertObjectToJsonString();
if (_.isString(contact)) {
    console.log('Successfully converted an object to a JSON string' .green);
} else {
    console.log('Failed to convert an object to a JSON string' .red);
}

console.log('');

contacts = Contact.convertJsonStringToObjectArray();
if (_.isArray(contacts)) {
    console.log('Successfully converted a JSON string to an object array' .green);
} else {
    console.log('Failed to convert a JSON string to an object array' .red);
}

console.log('');

contacts = Contact.convertObjectArrayToJsonString();
if (_.isString(contacts)) {
    console.log('Successfully converted an object array to a JSON string' .green);
} else {
    console.log('Failed to convert an object array to a JSON string' .red);
}

console.log('');
console.log('End processing ...' .cyan);
console.log('');


