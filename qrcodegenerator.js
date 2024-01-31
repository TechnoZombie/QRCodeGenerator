let URL = 'http://api.qrserver.com/v1/create-qr-code/?data=google.com&size=150x150&color=0f0&bgcolor=0-0-0&qzone=1&format=png'
let API_URL = URL;

$(document).ready(function () {
    const convertButton = $('#buttonGenerate');


    convertButton.click(function () {
        generateQR();
    });

function generateQR(callBackFunction) {
    fetchData(function (error, result)
    {
        if (error) {
            console.error('Error generating code: ', error)

        } else {
            callBackFunction(result);
        }
    });
}


function fetchData(cb) {
    $.ajax({
        url: API_URL,
        type: 'GET',
        dataType: 'json',
        async: true,
        success: function (results) {
            cb(null, results);
        },
        error: function (request, statusText, httpError) {
            cb(httpError || statusText);
        }
    });
}