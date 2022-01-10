$("form#data").submit(function(e) {
    e.preventDefault();
    $('#loading').removeClass('hide');
    $('#loading').addClass('show');
    var formData = new FormData(this);

    $.ajax({
        url: 'criptografar.php',
        type: 'POST',
        data: formData,
        success: function (data) {
            if (data == 0) {
                retorno = '<div class="alert alert-danger" role="alert">O arquivo não foi inserido!</div>';
                $("#resultado").html(retorno);
                $('#loading').removeClass('show');
                $('#loading').addClass('hide');
            } else {
                retorno = '<div class="alert alert-success" role="alert">O hash gerado foi: <b style="word-wrap: break-word;">'+data+'</b></div>';
                $("#resultado").html(retorno);
                $('#loading').removeClass('show');
                $('#loading').addClass('hide');
            }
        },
        cache: false,
        contentType: false,
        processData: false
    });
});