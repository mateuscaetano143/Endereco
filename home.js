$(document).ready(function () {
  $("#cep").mask("00000-000");
  $("#buscar").click(function () {
    // Obtém o valor do campo de CEP com a máscara
    var cepComMascara = $("#cep").val();

    // Remove a máscara do valor do campo de CEP
    var cep = cepComMascara.replace(/\D/g, ""); // Isso remove todos os caracteres não numéricos

    console.log(cep);

    // Verifica se o campo de CEP está vazio
    if (cep.trim() === "") {
      $("#erroModal").modal("show");
      return;
    }

    $.get(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
      console.log(data);
      if (!data.erro) {
        $("#logradouro").val(data.logradouro);
        $("#bairro").val(data.bairro);
        $("#cidade").val(data.localidade);
        $("#estado").val(data.uf);
        $("#DDD").val(data.ddd);
        $("#complemento").val(data.complemento);
        $("#enderecoModal").modal("show");
      } else {
        $("#erroModal").modal("show");
      }
    });
  });
});
