// <tabs tabs="[{title, content}]">
angular.module('app.components').directive('tabs', function () {
  return {
    restrict: 'E',
    scope: { tabs: '=' },
    template:
      '<div class="tabs">' +
      '  <div class="tab-list">' +
      '    <button ng-repeat="t in tabs" ng-class="{active: active === $index}" ng-click="select($index)">{{ t.title }}</button>' +
      '  </div>' +
      '  <div class="tab-panel">{{ tabs[active].content }}</div>' +
      '</div>',
    link: function (scope) {
      scope.active = 0;
      scope.select = function (i) { scope.active = i; };
    }
  };
});
