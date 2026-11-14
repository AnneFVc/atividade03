// Serviço com os dados (fictícios) usados pelos componentes.
angular.module('app.services').factory('dataService', function () {
  var names = ['Notebook', 'Mouse', 'Teclado', 'Monitor', 'Headset', 'Webcam',
               'Cadeira', 'Mesa', 'Impressora', 'Roteador', 'Tablet', 'Caixa de som'];
  var products = names.map(function (n, i) {
    return {
      name: n,
      price: 49.9 + i * 87.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
  });

  return {
    getProducts: function () { return products; },
    getFaq: function () {
      return [
        { title: 'Como crio uma conta?', content: 'Clique em "Cadastrar" e preencha seus dados. Lorem ipsum dolor sit amet.' },
        { title: 'Como redefino minha senha?', content: 'Use a opção "Esqueci a senha" na tela de login. Lorem ipsum dolor sit amet.' },
        { title: 'Quais formas de pagamento?', content: 'Aceitamos cartão, Pix e boleto. Lorem ipsum dolor sit amet.' },
        { title: 'Como falo com o suporte?', content: 'Pelo chat, de segunda a sexta, das 8h às 18h. Lorem ipsum dolor sit amet.' }
      ];
    },
    getProfileTabs: function () {
      return [
        { title: 'Dados', content: 'Nome: Maria Silva | E-mail: maria@exemplo.com' },
        { title: 'Endereço', content: 'Rua das Flores, 123 - Salvador, BA' },
        { title: 'Preferências', content: 'Idioma: Português | Notificações: ativadas' }
      ];
    }
  };
});
