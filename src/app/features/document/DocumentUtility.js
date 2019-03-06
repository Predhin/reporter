/**
 * DocumentUtility
 */
// eslint-disable-next-line
const PDFDocument = require( "pdfkit" );
const PdfTable = require( "voilab-pdf-table" );

class DocumentUtility {
    createPDF( content ) {
        return new Promise( ( resolve ) => {
            let pdf = new PDFDocument( { "autoFirstPage": false } ),
                buffers = [],
                table = new PdfTable( pdf, {
                    "bottomMargin": 30
                } );

            pdf.on( "data", buffers.push.bind( buffers ) );
            pdf.on( "end", () => {

                let pdfData = Buffer.concat( buffers );

                resolve( pdfData );

            } );

            // pdf.text( "Hello", 100, 100 );
            // pdf.end();
            table
            // add some plugins (here, a 'fit-to-width' for a column)
                // eslint-disable-next-line global-require
                .addPlugin( new ( require( "voilab-pdf-table/plugins/fitcolumn" ) )( {
                    "column": "key"
                } ) )
            // set defaults to your columns
                .setColumnsDefaults( {
                    "border": "B",
                    "align": "right"
                } )
            // add table columns
                .addColumns( [
                    {
                        "id": "key",
                        "header": "",
                        "align": "left",
                        "width": 200,
                        "stroke": true
                    },
                    {
                        "id": "value",
                        "header": "",
                        "width": 200,
                        "align": "left"
                    }
                ] )
            // add events (here, we draw headers on each new page)
                .onPageAdded( ( tb ) => {
                    tb.addHeader();
                } );
 
            // if no page already exists in your PDF, do not forget to add one
            pdf.addPage();
 
            // draw content, by passing data to the addBody method
            table.addBody( content );

            pdf.end();
        } );
        
    }
    
}

module.exports = {
    DocumentUtility
};
