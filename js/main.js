$(document).ready(function () {
    $('#carosel-imagens').slick({
        autoplay: true,
    });

    $('.menu-Hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00)00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira seu telefone',
            mensagem: 'Por favor, insira uma mensagem',
            veiculoInteresse: 'Por favor, selecione um veículo de interesse'
        },
        submitHandler: function (form) {
            console.log(form);
            // Adicione aqui a lógica de submissão do formulário
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

});
