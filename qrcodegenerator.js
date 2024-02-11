const apiThrowAway = 'http://api.qrserver.com/v1/create-qr-code/';
$(document).ready(function () {
    const generateButton = $('#buttonGenerate');

    generateButton.click(function () {
        generateQr();
    });

    const resetButton = $('#resetButton');
    resetButton.click(function () {
        clearFields();
    });

    $(document).on('click', '#downloadButton', function () {
        downloadImage();
    });

    function clearFields() {
        $("#inputUrl").val('');
        $("#sizeSelection").val('Default Size');
        $("#bgColorSelect").val('Background Color');
        $("#codeColorSelect").val('Code Color');
        $('.generatedQRcode').empty();
    }

});

function generateQr() {
    let qrCodeUrl = apiThrowAway;
    let data = $('#inputUrl').val();
    let size = $('#sizeSelection').val();
    let bgColor = colorDecoder($('#bgColorSelect').val());
    let codeColor = colorDecoder($('#codeColorSelect').val());

    qrCodeUrl += '?data=' + data;
    qrCodeUrl += '&size=' + size;
    qrCodeUrl += '&bgcolor=' + bgColor;
    qrCodeUrl += '&color=' + codeColor;
    qrCodeUrl += '&qzone=1';
    qrCodeUrl += '&format=png';

    injectQrCode(data, qrCodeUrl);
}

function injectQrCode(data, imgUrl) {
    if (data === "") {
        $('.generatedQRcode').append('URL is empty');
    } else {
        $('.generatedQRcode').empty();
        $('.generatedQRcode').append('<img src=' + imgUrl + '>');
        $('.generatedQRcode').append('<br><button type="button" id="downloadButton">Download</button>');
    }
}

function colorDecoder(color) {
    switch (color) {
        case 'Black':
            return '0-0-0';
        case 'Matrix Green':
            return '0f0';
    }
}

async function downloadImage() {
    let imgUrl = $('.generatedQRcode img').attr('src');
    let response = await fetch(imgUrl);
    let blobImage = await response.blob();
    let url = window.URL.createObjectURL(blobImage);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'qr_code.png';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
