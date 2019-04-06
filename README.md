# reporter

Aims to provide an solution for sending bulk email of reports for customers.

## WHAT'S IN

- [x] nodejs
- [x] xlsx
- [x] node-mailer
- [x] pdfkit

### Contribute

We've set up a separate document for our [contribution guidelines](./CONTRIBUTING.md).

### Prerequisites

Before you can build application, you must install and configure the following dependencies on your
machine:

- [Git](http://git-scm.com/): We are using GIT for maintaining our codebase and version management.

- [Node.js v10.13.0+ (LTS)](http://nodejs.org): We use Node to generate the documentation, run a
  development web server, run tests, and generate distributable files. Depending on your system,
  you can install Node either from source or as a pre-packaged bundle.

- [NPM](https://www.npmjs.com): We use NPM to install our Node.js module dependencies. If you install [Node.js](http://nodejs.org), npm should also be installed along with it.

### Installation

```sh
npm install
```

### Run

```sh
node src/index.js
```

or

```sh
npm start
```

### How to use the application

All that is required to use the application is configured through the file(default.json) inside the config folder. Application reads the excel (.xlsx) file inside the input folder and based on the configuration provided inside the default.json file inside config folder it triggers mail to each party(row inside excel). Below is the content of configuration file.

default.json

```json
{
  "credential": {
    "gmail": {
      "user": "<sender-email>",
      "password": "<sender-password>",
      "name": "<sender-name>"
    }
  },
  "master": {
    "user": "<receiver-email>"
  },
  "document": {
    "name": "<filename of input file>"
  },
  "mail": {
    "service": "gmail",
    "subject": "Know Your Corporate Mobility Asset Usage & Billing",
    "attachmentfilename": "bill"
  },
  "uniquefield": {
    "name": "Subscriber name",
    "id": "SAP Number",
    "email": "Email ID"
  }
}
```

#### See below the various configurations available:

##### credential

The credential used for sending email, currently we only have integration with GMAIL mail service.

##### master

The master user who is supposed to receive all the emails is provided through this property.

##### document

The name of input excel(.xlsx) file which contains details of each parties.

##### mail

The details required for mail are provided through this property. Currently we only have integration with gmail, so do not change the "service" property. The "subject" property is used for providing the subject of the mail triggered and the "attachmentfilename" property is used to provide the name of the attachment file send in the mail.

##### uniquefield

This field is used to identify the unique identifiers(id, name & email) for each party details. No need to change these values unless the column name of the current input excel(.xlsx) file changes.

### Features

- [x] Bulk Mailer
- [x] Automation

### FAQ

- What is the technology used ?
NodeJS

- How to setup different Git profiles ?
[Click here](https://stackoverflow.com/questions/4220416/can-i-specify-multiple-users-for-myself-in-gitconfig)

### References

- [Nodemailer](https://nodemailer.com/about/)
- [pdfkit](http://pdfkit.org/)
- [table generation using pdfkit](https://github.com/voilab/voilab-pdf-table)

### To Do

- [ ] Implement Queuing using RabbitMQ
- [ ] Style PDF
- [ ] Implement Fail-Proof setup

### Change Log

[Show Change log](./CHANGELOG.md)