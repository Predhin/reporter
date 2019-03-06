/**
 * Utility
 */
class Utility {
    
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
                    dataArray.push( { "key": key.toUpperCase(), "value": row[ key ] } );
                } );
                objectDictionary.push( dataArray );
            }
        }

        return objectDictionary;
    }
    
}

module.exports = {
    Utility
};
