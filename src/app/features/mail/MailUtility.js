/**
 * MailUtility
 */
const nodemailer = require( "nodemailer" );
const dateformat = require( "dateformat" );
const config = require( "config" );

class MailUtility {
    send( buffer, objectDictionary ) {
        return new Promise( ( resolve, reject ) => {
            const transporter = nodemailer.createTransport( {
                    "service": `${config.get( "mail.service" )}`,
                    "auth": {
                        "user": `${config.get( "credential.gmail.user" )}`,
                        "pass": `${config.get( "credential.gmail.password" )}`
                    }
                } ),
                mailOptions = {
                    "from": `${config.get( "credential.gmail.user" )}`, // sender address
                    "to": `${config.get( "master.user" )}`, // list of receivers
                    "subject": `${config.get( "mail.subject" )}`, // Subject line
                    "html": this.getBodyHTML( objectDictionary.list ), // plain text body,
                    "attachments": [
                        { // binary buffer as an attachment
                            "filename": `${config.get( "mail.attachmentfilename" )}.pdf`,
                            "content": buffer
                        }
                    ]
                };

            transporter.sendMail( mailOptions, ( error, info ) => {
                if ( error ) {
                    reject( error );
                } else {
                    resolve( info );
                }
            } );

        } );
    }

    getBodyHTML( objectDictionary ) {
        let now = dateformat( new Date(), "mmmm dS, yyyy" );
        const tableString = this.getTabularSummaryHTML( objectDictionary );

        return `
        <p>Dear Associate,</p>
        <p>Please find enclosed the E-bill for the bill dated: ${now}</p>
        <p>Summary of usage charges for this bill period.</p>
        <p>
        ${tableString}
        </p>
        <p>This mailer shares the summary of your mobile billing and data card usage that are remunerated and governed by Company Policy.It is your responsibility to adhere to the organizational restrictions and usage limits. IT resources are allocated for official use only.</p>
        <p><br />For any further assistance, please raise a GSD.</p>
        <p>Request you to kindly refer to the Telecom Policy.</p>
        <p>Regards,<br />Team IT</p>
        `;
    }

    getTabularSummaryHTML( objectDictionary ) {
        let headerString = "",
            bodyString = "",
            tableString = "";

        objectDictionary.forEach( ( aItem ) => {
            headerString = `${headerString }<th style="border: 1px solid black;color:#500050;">${ aItem.key}</th>`;
            bodyString = `${bodyString }<td style="border: 1px solid black;color:#500050;">${aItem.value}</td>`;
        } );
        tableString = `<table style="border: 1px solid black;">
                        <thead style="color:#500050;text-transform: uppercase;">
                        <tr>
                            ${headerString}
                        </tr>
                        </thead>
                        <tbody style="style="color:#500050;">
                        <tr>
                            ${bodyString}
                        </tr>
                        </tbody>
                      </table>
                      `;

        return tableString;
    }
}

module.exports = {
    MailUtility
};
