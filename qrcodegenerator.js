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
        generateBgColorSelect();
        generateCodeColorSelect();
        generateFormatSelect()
        $('.generatedQRcode').empty();
    }
});

function generateQr() {
    const apiURL = 'https://api.qrserver.com/v1/create-qr-code/';
    const tempData = $('#inputUrl').val();
    const data = encodeURIComponent(tempData);
    const size = $('#sizeSelection').val();
    const bgColor = colorDecoder($('#bgColorSelect').val());
    const codeColor = colorDecoder($('#codeColorSelect').val());
    const format = $('#formatSelect').val();

    const qrCodeUrl = apiURL +
        '?data=' + data +
        '&size=' + size + 'x' + size +
        '&bgcolor=' + bgColor +
        '&color=' + codeColor +
        '&qzone=1' +
        '&format=' + format;

    injectQrCode(data, qrCodeUrl).then(r => {
    });
}

async function injectQrCode(data, imgUrl) {
    if (data === "") {
        $('.generatedQRcode').append('URL is empty');
    } else {
        $('.generatedQRcode').empty();
        $('.generatedQRcode').append('<br><img src=' + imgUrl + '>');
        await new Promise(resolve => {
            $('.generatedQRcode img').on('load', function () {
                resolve();
            });
        });
        $('.generatedQRcode').append('<br><button type="button" id="downloadButton">Download</button>');
    }
}

function colorDecoder(color) {
    switch (color) {
        case 'Black':
            return '0-0-0';
        case 'Matrix Green':
            return '00FF00';
        case 'Red':
            return 'f00';
        case 'Blue':
            return '00f'
        case 'OD Green':
            return '556B2F'
        case 'White':
            return 'FFFFFF'
        case 'Green':
            return '007500'
        case 'Orange':
            return 'FF9200'
        case 'Gray':
            return '495057'
    }
}

async function downloadImage() {
    let imgUrl = $('.generatedQRcode img').attr('src');
    let response = await fetch(imgUrl);
    let blobImage = await response.blob();
    let url = window.URL.createObjectURL(blobImage);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'qr_code';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
