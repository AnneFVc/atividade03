// Serviço que gerencia várias notificações toast.
angular.module('app.services').factory('toastService', ['$timeout', function ($timeout) {
  var nextId = 1;
  var service = { toasts: [], show: show, remove: remove };

  function remove(id) {
    service.toasts = service.toasts.filter(function (t) { return t.id !== id; });
  }

  function show(type, message, duration) {
    var toast = { id: nextId++, type: type, message: message };
    service.toasts.push(toast);
    // Some sozinho após alguns segundos
    $timeout(function () { remove(toast.id); }, duration || 3500);
  }

  return service;
}]);
