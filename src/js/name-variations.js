export default class NameVariations {
    /** @param {string} name */
    constructor(name) {
        // your code
        this.name = name;
    }

    getNumberOfChars() {
        // your code
        return this.name.length;
    }

    getLower() {
        // your code
        return this.name.toLowerCase();
    }

    getUpper() {
        // your code
        return this.name.toUpperCase();
    }
}
