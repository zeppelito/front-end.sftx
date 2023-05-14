const soap = require('soap');

const cep = '70002900'; // CEP de Brasília
const cnpj = '00000000000191'; // CNPJ dos Correios

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function(err, client) {
  if (err) {
    console.error(err);
  } else {
    // Consulta o endereço pelo CEP
    client.consultaCEP({ cep }, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Endereço: ${result.return.end}, ${result.return.bairro}, ${result.return.cidade}/${result.return.uf}`);
      }
    });

    // Consulta o status de uma encomenda pelo CNPJ dos Correios
    client.solicitaXmlPlp({ idPlpMaster: '', usuario: '', senha: '', cnpj }, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Status da encomenda: ${result.return}`);
      }
    });
  }
});
