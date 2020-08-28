'use strict';

$('.shaft-type').change(function() {
    if ($(this).val() != '') {
      window.location.href = '/form-step2';
      console.log($(this).val());
    }
  });
