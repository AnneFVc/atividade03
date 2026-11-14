// <pagination total="n" current="page" on-change="fn(page)">
angular.module('app.components').directive('pagination', function () {
  return {
    restrict: 'E',
    scope: { total: '=', current: '=', onChange: '&' },
    template:
      '<nav class="pagination">' +
      '  <button ng-click="go(current - 1)" ng-disabled="current <= 1">Anterior</button>' +
      '  <button ng-repeat="p in pages()" ng-class="{active: p === current}" ng-click="go(p)">{{ p }}</button>' +
      '  <button ng-click="go(current + 1)" ng-disabled="current >= total">Próxima</button>' +
      '  <small>Página {{ current }} de {{ total }}</small>' +
      '</nav>',
    link: function (scope) {
      scope.pages = function () {
        var list = [];
        for (var i = 1; i <= scope.total; i++) list.push(i);
        return list;
      };
      scope.go = function (page) {
        if (page >= 1 && page <= scope.total && page !== scope.current) {
          scope.onChange({ page: page });
        }
      };
    }
  };
});
