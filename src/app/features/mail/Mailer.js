/** *
 * ExcelReader
 */

const { MailUtility } = require( "./MailUtility" );

const nodemailer = require( "nodemailer" );

// eslint-disable-next-line no-unused-vars
class Mailer {

    constructor() {
        this.MailUtility = new MailUtility();
    }

    send( buffer ) {
        const transporter = nodemailer.createTransport( {
                "service": "gmail",
                "auth": {
                    "user": "fluorkuwaitonline@gmail.com",
                    "pass": "kuwait@123"
                }
            } ),
            mailOptions = {
                "from": "fluorkuwaitonline@gmail.com", // sender address
                "to": "predhin@gmail.com", // list of receivers
                "subject": "Reporter", // Subject line
                "html": "<p>PFA the bill</p>", // plain text body,
                "attachments": [
                    { // binary buffer as an attachment
                        "filename": "bill.pdf",
                        "content": buffer
                    }
                ]
            };

        transporter.sendMail( mailOptions, ( error, info ) => {
            if ( error ) {
                // eslint-disable-next-line no-console
                console.log( error );
            } else {
                // eslint-disable-next-line no-console
                console.log( info );
            }
        } );
    }

}

module.exports = {
    Mailer
};
