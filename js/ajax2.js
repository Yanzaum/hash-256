$("form#data").submit(function(e) {
    e.preventDefault();
    $('#loading').removeClass('hide');
    $('#loading').addClass('show');
    var formData = new FormData(this);

    $.ajax({
        url: 'comparar.php',
        type: 'POST',
        data: formData,
        success: function (data) {
            if (data == 0) {
                retorno = '<div class="alert alert-success font-weight-bold" role="alert">O arquivo é autentico!</div>';
                $("#resultado").html(retorno);
                $('#loading').removeClass('show');
                $('#loading').addClass('hide');
            } else if (data < 0 || data > 0) {
                retorno = '<div class="alert alert-danger font-weight-bold" role="alert">O arquivo foi adulterado!</div>';
                $("#resultado").html(retorno);
                $('#loading').removeClass('show');
                $('#loading').addClass('hide');
            } else {
                retorno = '<div class="alert alert-danger" role="alert">'+data+'</div>';
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