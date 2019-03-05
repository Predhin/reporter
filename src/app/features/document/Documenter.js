/** *
 * Documenter
 */
const { DocumentUtility } = require( "./DocumentUtility" );

// eslint-disable-next-line no-unused-vars
class Documenter {

    constructor() {
        this.documentUtility = new DocumentUtility();
    }

    create( objectDictionary ) {
        return this.documentUtility.createPDF( objectDictionary );
    }

}

module.exports = {
    Documenter
};
