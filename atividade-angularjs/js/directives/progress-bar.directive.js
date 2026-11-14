// <progress-bar value="0-100" show-label="true">
angular.module('app.components').directive('progressBar', function () {
  return {
    restrict: 'E',
    scope: { value: '=', showLabel: '@' },
    template:
      '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="{{ clamped() }}">' +
      '  <div class="progress-fill" ng-style="{width: clamped() + \'%\'}">' +
      '    <span ng-if="showLabel === \'true\' && clamped() > 8">{{ clamped() }}%</span>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.clamped = function () {
        return Math.min(100, Math.max(0, scope.value || 0));
      };
    }
  };
});
