/**
 * ExcelUtility
 */
// eslint-disable-next-line newline-after-var
const XLSX = require( "xlsx" );

class ExcelUtility {
    iterateSheetObj( sheetData ) {
        let jsonObj = {};
        const keys = Object.keys( sheetData );

        sheets = keys;
        keys.forEach( ( key ) => {
            let aSheetList = sheetData[ key ];

            jsonObj[ key ] = {};
            aSheetList.forEach( ( row ) => {
                jsonObj[ key ] = row;
            } );
        } );
        return jsonObj;
    }

    getWorkBook( fileName ) {
        let workBook = XLSX.readFile( fileName );

        return workBook;
    }

    toJson( workbook ) {
        let result = {};

        workbook.SheetNames.forEach( ( sheetName ) => {
            let roa = XLSX.utils.sheet_to_row_object_array( workbook.Sheets[ sheetName ] );

            if ( roa.length > 0 ) {
                result[ sheetName ] = roa;
            }
        } );
        return result;
    }
    
}

module.exports = {
    ExcelUtility
};
