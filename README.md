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