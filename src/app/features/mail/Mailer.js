/** *
 * ExcelReader
 */

const { MailUtility } = require( "./MailUtility" );

// eslint-disable-next-line no-unused-vars
class Mailer {

    constructor() {
        this.mailUtility = new MailUtility();
    }

    send( buffer, objectDictionary ) {
        return this.mailUtility.send( buffer, objectDictionary );
    }

}

module.exports = {
    Mailer
};
