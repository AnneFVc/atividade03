// Filtro customizado: corta o texto e adiciona reticências.
angular.module('app.filters').filter('truncate', function () {
  return function (text, max) {
    if (!text) return '';
    max = max || 30;
    return text.length > max ? text.substring(0, max) + '...' : text;
  };
});
