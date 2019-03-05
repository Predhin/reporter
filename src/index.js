/**
 * Index
 */
const { ExcelReader } = require( "./app/features/excel/ExcelReader" );
const { Mailer } = require( "./app/features/mail/Mailer" );
const { Documenter } = require( "./app/features/document/Documenter" );

class Index {
    constructor() {
        this.excelReader = new ExcelReader();
        this.importPath = "./input";
        this.exportPath = "out";
        this.mailer = new Mailer();
        this.documenter = new Documenter();
    }
    run() {
        const dataDictionary = this.excelReader.read( `${this.importPath}/bill-details.xlsx` );

        // eslint-disable-next-line no-console
        console.log( dataDictionary );
        
        // eslint-disable-next-line one-var
        const objectDictionaries = this.getObjectDictionary( dataDictionary );

        objectDictionaries.forEach( ( objectDictionary ) => {
            // eslint-disable-next-line no-console
            console.log( objectDictionary );
            // this.mailer.send();
            this.documenter.create( objectDictionary ).then( ( pdfData ) => {
                this.mailer.send( pdfData );
            } );
        } );
    }

    getObjectDictionary( dataDictionary ) {
        let dataArray = [],
            keys = [],
            dataDictionaryKeys = [],
            objectDictionary = [];
        // iterate each sheet

        dataDictionaryKeys = Object.keys( dataDictionary );
        for ( const dataDictionaryKey of dataDictionaryKeys ) {
            // eslint-disable-next-line no-empty
            for ( const row of dataDictionary[ dataDictionaryKey ] ) {
                dataArray = [];
                keys = Object.keys( row );
                // eslint-disable-next-line no-loop-func
                keys.forEach( ( key ) => {
                    dataArray.push( { "key": key, "value": row[ key ] } );
                } );
                objectDictionary.push( dataArray );
            }
        }

        return objectDictionary;
    }
}

new Index().run();

