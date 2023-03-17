var valor;
//////////// ID de hoja de Google Sheet/////////////////////////////////
var sheetId = '1fPmi8IbN7tOmHgVTJwA3WtowqinUIXlHt8IkumZjbZw';

function loadSheetsAPI() {
    gapi.client.setApiKey('AIzaSyBUm07gcBWttDnJA76ynk-EcjG6hObo5S8');
    var discoveryUrl =
        'https://sheets.googleapis.com/$discovery/rest?version=v4';
    gapi.client.load(discoveryUrl).then(getCounter);
    gapi.client.load(discoveryUrl).then(getCounter1);
    gapi.client.load(discoveryUrl).then(getCounter2);
    gapi.client.load(discoveryUrl).then(getCounter3);
    gapi.client.load(discoveryUrl).then(getCounter4);
    gapi.client.load(discoveryUrl).then(getCounter5);
    gapi.client.load(discoveryUrl).then(getCounter6);
    gapi.client.load(discoveryUrl).then(getCounter7);
    gapi.client.load(discoveryUrl).then(getCounter8);
    gapi.client.load(discoveryUrl).then(getCounter9);
    gapi.client.load(discoveryUrl).then(getCounter10);
    gapi.client.load(discoveryUrl).then(getCounter11);
    gapi.client.load(discoveryUrl).then(getCounter12);
    gapi.client.load(discoveryUrl).then(getCounter13);
    gapi.client.load(discoveryUrl).then(getCounter14);
    gapi.client.load(discoveryUrl).then(getCounter15);
    gapi.client.load(discoveryUrl).then(getCounter16);
    gapi.client.load(discoveryUrl).then(getCounter17);
    gapi.client.load(discoveryUrl).then(getCounter18);
    gapi.client.load(discoveryUrl).then(getCounter19);

}

/////////////////////////////////////////////NOMBRE DE LA MATERIA//////////////////////////////////////////////////////
function getCounter() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C4',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        valor = row;
        document.getElementById("materia").innerHTML = valor;
    });
}

///////////////////////////////////////////////////CREDITOS DEL CURSO//////////////////////////////////////////////////
function getCounter1() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C5',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);

        document.getElementById("creditos").innerHTML = row;
    });
}

///////////////////////////////////////////////////TRIMESTRE//////////////////////////////////////////////////////////
function getCounter2() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C6',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("trimestre").innerHTML = row;
    });
}

///////////////////////////////////////////////////PRESENTACION////////////////////////////////////////////////////////
function getCounter3() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C7',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("presentacion").innerHTML = row;
    });
}
///////////////////////////////////////////////////OBJETIVO GENERAL////////////////////////////////////////////////////
function getCounter4() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C8',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("ogeneral").innerHTML = row;
    });
}

///////////////////////////////////////////////////OBJETIVO ESPECIFICO 1///////////////////////////////////////////////
function getCounter5() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C9',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("oespecifico1").innerHTML = row;
    });
}


///////////////////////////////////////////////////OBJETIVO ESPECIFICO 2///////////////////////////////////////////////
function getCounter6() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C10',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("oespecifico2").innerHTML = row;
    });
}



///////////////////////////////////////////////////OBJETIVO ESPECIFICO 3///////////////////////////////////////////////
function getCounter7() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C11',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("oespecifico3").innerHTML = row;
    });
}


///////////////////////////////////////////////////NOMBRE TEMA 1///////////////////////////////////////////////////////
function getCounter8() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C13',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("ntema1").innerHTML = row;
    });
}

///////////////////////////////////////////////////DESCRIPCION TEMA 1//////////////////////////////////////////////////
function getCounter9() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C14',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("dtema1").innerHTML = row;
    });
}

///////////////////////////////////////////////////NOMBRE TEMA 2///////////////////////////////////////////////////////
function getCounter10() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C15',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("ntema2").innerHTML = row;
    });
}

///////////////////////////////////////////////////DESCRIPCION TEMA 2//////////////////////////////////////////////////
function getCounter11() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C16',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("dtema2").innerHTML = row;
    });
}

///////////////////////////////////////////////////NOMBRE TEMA 3///////////////////////////////////////////////////////
function getCounter12() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C17',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("ntema3").innerHTML = row;
    });
}

///////////////////////////////////////////////////DESCRIPCION TEMA 3//////////////////////////////////////////////////
function getCounter13() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C18',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("dtema3").innerHTML = row;
    });
}

///////////////////////////////////////////////////NOMBRE TEMA 4///////////////////////////////////////////////////////
function getCounter14() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C19',
    }).then(function (response) {
        var range = response.result;
        if(range.values != undefined ){
            if (range.values.length > 0  ) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }} else {
            console.log()
        }
            console.log(row);
            document.getElementById("ntema4").innerHTML = row;

    });
}

///////////////////////////////////////////////////DESCRIPCION TEMA 4//////////////////////////////////////////////////
function getCounter15() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C20',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("dtema4").innerHTML = row;
    });
}

///////////////////////////////////////////////////NOMBRE TEMA 5///////////////////////////////////////////////////////
function getCounter16() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C21',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("ntema5").innerHTML = row;
    });
}

///////////////////////////////////////////////////DESCRIPCION TEMA 5//////////////////////////////////////////////////
function getCounter17() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C22',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("dtema5").innerHTML = row;
    });
}

///////////////////////////////////////////////////NOMBRE PROFESOR/////////////////////////////////////////////////////
function getCounter18() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C23',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("nprofesor").innerHTML = row;
    });
}

///////////////////////////////////////////////////DESCRIPCIONESOR/////////////////////////////////////////////////////
function getCounter19() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: '!C24',
    }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
            }
        }
        console.log(row);
        document.getElementById("dprofesor").innerHTML = row;
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
