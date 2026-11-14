// <accordion items="..."> - um item aberto por vez.
angular.module('app.components').directive('accordion', function () {
  return {
    restrict: 'E',
    scope: { items: '=' },
    template:
      '<div class="accordion">' +
      '  <div class="acc-item" ng-repeat="item in items" ng-class="{open: openIndex === $index}">' +
      '    <button class="acc-header" ng-click="toggle($index)">' +
      '      {{ item.title }} <span>{{ openIndex === $index ? "−" : "+" }}</span>' +
      '    </button>' +
      '    <div class="acc-body"><div class="acc-inner">{{ item.content }}</div></div>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.openIndex = -1;
      scope.toggle = function (i) {
        scope.openIndex = scope.openIndex === i ? -1 : i;
      };
    }
  };
});
