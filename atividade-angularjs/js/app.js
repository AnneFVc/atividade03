// Módulo principal: orquestra módulos, controlador e serviços.
angular.module('app.services', []);
angular.module('app.filters', []);
angular.module('app.components', ['app.services']);

angular.module('app', ['app.services', 'app.filters', 'app.components'])
  .controller('MainController', MainController);

MainController.$inject = ['$interval', 'dataService', 'toastService'];

function MainController($interval, dataService, toastService) {
  var vm = this;

  // Dados vindos do serviço
  vm.faq = dataService.getFaq();
  vm.products = dataService.getProducts();
  vm.profileTabs = dataService.getProfileTabs();
  vm.languages = [
    { label: 'Português', code: 'pt' },
    { label: 'English', code: 'en' },
    { label: 'Español', code: 'es' }
  ];
  vm.language = vm.languages[0];

  // Produtos: busca + paginação
  vm.search = '';
  vm.page = 1;
  vm.pageSize = 4;

  vm.filtered = function () {
    var term = vm.search.toLowerCase();
    return vm.products.filter(function (p) {
      return p.name.toLowerCase().indexOf(term) !== -1;
    });
  };
  vm.totalPages = function () {
    return Math.max(1, Math.ceil(vm.filtered().length / vm.pageSize));
  };
  vm.goToPage = function (page) { vm.page = page; };

  // Upload simulado (barra de progresso)
  vm.progress = 0;
  vm.uploading = false;
  var timer;

  vm.startUpload = function () {
    $interval.cancel(timer);
    vm.progress = 0;
    vm.uploading = true;
    toastService.show('info', 'Upload iniciado.');
    timer = $interval(function () {
      vm.progress += 5;
      if (vm.progress >= 100) {
        $interval.cancel(timer);
        vm.uploading = false;
        toastService.show('success', 'Upload concluído com sucesso!');
      }
    }, 150);
  };

  vm.failUpload = function () {
    $interval.cancel(timer);
    vm.uploading = false;
    toastService.show('error', 'Erro ao salvar o arquivo.');
  };

  // Menu suspenso: callback de seleção
  vm.changeLanguage = function (option) {
    vm.language = option;
    toastService.show('success', 'Idioma alterado para ' + option.label + '.');
  };
}
