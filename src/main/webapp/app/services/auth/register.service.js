(function () {
    'use strict';

    angular
        .module('proyectoRegistroAcademicoApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
