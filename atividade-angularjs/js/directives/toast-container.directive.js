// <toast-container> - exibe as notificações do toastService.
angular.module('app.components').directive('toastContainer', ['toastService', function (toastService) {
  return {
    restrict: 'E',
    scope: {},
    template:
      '<div class="toast-container">' +
      '  <div class="toast" ng-repeat="t in service.toasts" ng-class="t.type">' +
      '    <span>{{ t.message }}</span>' +
      '    <button ng-click="service.remove(t.id)" aria-label="Fechar">×</button>' +
      '  </div>' +
      '</div>',
    link: function (scope) { scope.service = toastService; }
  };
}]);
