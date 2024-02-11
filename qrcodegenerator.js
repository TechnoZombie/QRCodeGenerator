const apiThrowAway = 'http://api.qrserver.com/v1/create-qr-code/,' +
    '?data=google.com,' +
    '&size=150x150,' +
    '&color=0f0,' +
    '&bgcolor=0-0-0,' +
    '&qzone=1,' +
    '&format=png';

$(document).ready(function () {
    const generateButton = $('#buttonGenerate');

    generateButton.click(function () {
        generateQR();
    });

    const resetButton = $('#resetButton');
    resetButton.click(function () {
        $("#inputUrl").val('');
        $("#sizeSelection").val('Default Size');
        $('.generatedQRcode').empty();
    });



});

function generateQR() {
    let qrCodeUrl = 'http://api.qrserver.com/v1/create-qr-code/'
    let data = $('#inputUrl').val();
    let size = $('#sizeSelection').val();
    let bgColor = colorDecoder($('#bgColorSelect').val());
    let codeColor = colorDecoder($('#codeColorSelect').val());

    console.log(size)

    qrCodeUrl += '?data=' + data;
    qrCodeUrl += '&size=' + size;
    qrCodeUrl += '&bgcolor=' + bgColor;
    qrCodeUrl += '&color=' + codeColor;

    qrCodeUrl += '&qzone=1';
    qrCodeUrl += '&format=png';

    console.log(qrCodeUrl);

    injectQrCode(data, qrCodeUrl);

}

function injectQrCode(data, imgUrl) {
    if (data === "") {
        $('.generatedQRcode').append('URL is empty')
    } else {
        $('.generatedQRcode').empty();
        $('.generatedQRcode').append('<img src=' + imgUrl + '>');
    }
}

function colorDecoder(color){
    switch (color){
        case 'Black':
        return '0-0-0';

        case 'Matrix Green':
            return '0f0';

    }
}

