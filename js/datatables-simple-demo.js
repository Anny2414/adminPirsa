window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
   
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple, {
            exports: {
                type: "csv", // "csv", "txt", "json" or "sql"

            download: true, // trigger download of file or return the string
            skipColumn: [], // array of column indexes to skip

            // csv
            lineDelimiter:  "\n", // line delimiter for csv type
            columnDelimiter:  ",", // column delimiter for csv type

            // sql
            tableName: "myTable", // SQL table name for sql type

            // json
            replacer: null, // JSON.stringify's replacer parameter for json type
            space: 4 // JSON.stringify's space parameter for json type
            },
            searchable: true,

        });
    }

});
