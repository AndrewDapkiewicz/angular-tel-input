(function() {
  'use strict';

  var componentOptions = {
    bindings   : {
      inputName  : '<',
      isRequired : '<',
      number     : '=',
      onChange   : '&',
      onBlur     : '&',
      onFocus    : '&'
    },
    controller  : ['$filter', TelInputCtrl],
    template    : '<input name="{{::$ctrl.inputName}}" ng-blur="$ctrl.onBlur()" ng-change="$ctrl.onNumberChange()" ng-focus="$ctrl.onFocus()" ng-model="$ctrl.numberTracker" ng-required="$ctrl.isRequired" type="tel" />'
  };
  var numberRegex = /[^0-9]/g;

  function TelInputCtrl($filter) {
    // Value to track in model
    this.numberTracker = this.number;

    // Methods
    this.onNumberChange = onNumberChange;

    function onNumberChange() {
      var newNumber = this.numberTracker.replace(numberRegex, '').slice(0, 10).trim();

      this.number        = newNumber;
      this.numberTracker = $filter('tel')(newNumber);
      this.onChange();
    }
  }

  function telInputFilter() {
    return function filter(tel) {
      var areaCode;
      var number;
      var value;

      if (!tel) {
        return '';
      }

      value = tel.toString().trim().replace(/^\+/, '');

      if (value.match(numberRegex)) {
        return tel;
      }

      switch (value.length) {
        case 1:
        case 2:
        case 3:
          areaCode = value;
          break;
        default:
          areaCode = value.slice(0, 3);
          number   = value.slice(3);
      }

      if (number) {
        if (number.length > 3) {
          number = number.slice(0, 3) + '-' + number.slice(3, 7);
        }

        return ('(' + areaCode + ') ' + number).trim();
      }

      return '(' + areaCode;
    };
  }

  angular.module('ngTelInput', [])
    .component('telInput', componentOptions)
    .filter('tel', telInputFilter);
})();
