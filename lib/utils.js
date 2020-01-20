class Utils {

    constructor() {

    }

    static isObject(x) {
        return (x && (typeof x === 'object' || x.constructor === Object));
    }

    static isString(x) {
        return (typeof x === 'string' || x instanceof String);
    }
    
}

module.exports = Utils;