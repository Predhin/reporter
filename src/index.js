/**
 * Index(Main Runner)
 */
const { ExcelReader } = require( "./app/features/excel/ExcelReader" );
const { Mailer } = require( "./app/features/mail/Mailer" );
const { Documenter } = require( "./app/features/document/Documenter" );
const { Utility } = require( "./app/shared/Utility" );
const config = require( "config" );

class Index {
    constructor() {
        // initialization
        this.excelReader = new ExcelReader();
        this.importPath = "./input";
        this.exportPath = "/output";
        this.UNIQUEFIELD = config.get( "uniquefield" );
        this.mailer = new Mailer();
        this.documenter = new Documenter();
        this.utility = new Utility();
    }
    run() {
        // eslint-disable-next-line no-console
        const start = new Date(),
            // read excel file
            dataDictionary = this.excelReader.read( `${this.importPath}/${config.get( "filename" )}.xlsx` ),
            objectDictionaries = this.utility.getObjectDictionary( dataDictionary );
        
        // this contains all rows of the excel in a generalized format
        objectDictionaries.forEach( ( objectDictionary ) => {
            // create document from data received from Excel
            this.documenter.create( objectDictionary ).then( ( pdfData ) => {
                this.mailer.send( pdfData, objectDictionary ).then( () => {
                    // eslint-disable-next-line no-console

                    // eslint-disable-next-line no-console
                    console.log( `Mail triggered to ${objectDictionary.vo[ this.UNIQUEFIELD.name ]}` );
                    const end = new Date() - start;

                    // eslint-disable-next-line no-console
                    console.info( "Execution time: %dms", end );
                } );
            } );
        } );
    }

}

// start application
new Index().run();

