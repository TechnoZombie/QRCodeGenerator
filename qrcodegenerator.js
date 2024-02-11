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
    });



});

function generateQR() {
    let qrCodeUrl = 'http://api.qrserver.com/v1/create-qr-code/'
    let data = $('#inputUrl').val();
    let size = $('#sizeSelection').val();
    let color;
    console.log(size)
    qrCodeUrl += '?data=' + data;
    qrCodeUrl += '&size=' + size;
    console.log(qrCodeUrl);
    injectQrCode(qrCodeUrl);

}

function injectQrCode(imgUrl) {
    $('.generatedQRcode').empty();
    $('.generatedQRcode').append('<img src=' + imgUrl + '>');
}

