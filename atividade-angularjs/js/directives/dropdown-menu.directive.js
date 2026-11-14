// <dropdown-menu label="..." options="[...]" on-select="fn(option)">
angular.module('app.components').directive('dropdownMenu', ['$document', function ($document) {
  return {
    restrict: 'E',
    scope: { label: '@', options: '=', onSelect: '&' },
    template:
      '<div class="dropdown">' +
      '  <button class="btn" ng-click="toggle()">{{ label }} ▾</button>' +
      '  <ul ng-show="open">' +
      '    <li ng-repeat="o in options"><button ng-click="choose(o)">{{ o.label }}</button></li>' +
      '  </ul>' +
      '</div>',
    link: function (scope, element) {
      scope.open = false;
      scope.toggle = function () { scope.open = !scope.open; };
      scope.choose = function (option) {
        scope.open = false;
        scope.onSelect({ option: option });
      };

      // Fecha ao clicar fora do menu
      function onDocClick(e) {
        if (scope.open && !element[0].contains(e.target)) {
          scope.$apply(function () { scope.open = false; });
        }
      }
      $document.on('click', onDocClick);
      scope.$on('$destroy', function () { $document.off('click', onDocClick); });
    }
  };
}]);
