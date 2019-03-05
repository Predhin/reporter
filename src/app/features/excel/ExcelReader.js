/** *
 * ExcelReader
 */

const { ExcelUtility } = require( "./ExcelUtility" );

// eslint-disable-next-line no-unused-vars
class ExcelReader {

    constructor() {
        this.excelUtility = new ExcelUtility();
    }

    read( fileName ) {
        this.fileName = fileName;
        const workBook = this.excelUtility.getWorkBook( fileName ),
            sheetObj = this.excelUtility.toJson( workBook );

        return sheetObj;
    }
    
}

module.exports = {
    ExcelReader
};
